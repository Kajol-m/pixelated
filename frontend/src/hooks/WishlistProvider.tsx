import { useEffect, useState } from "react";
import { WishlistContext } from "./WishlistContext";

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const baseUrl = import.meta.env.VITE_API_URL;
  // Load from localStorage first (instant UI)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("User") || "{}");
    const userId = user.user_id;
    if (!userId) return;

    const stored = JSON.parse(localStorage.getItem(`wishlist_${userId}`) || "[]");
    if (stored.length) setWishlist(stored);
  }, []);

  // Fetch from backend (sync latest)
  useEffect(() => {
    const fetchWishlist = async () => {
  const user = JSON.parse(localStorage.getItem("User") || "{}");
  let token = localStorage.getItem("token"); // updated name

  if (!user.user_id) return;

  try {
    let res = await fetch(`${baseUrl}/api/users/wishlist/${user.user_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    // If access token expired → refresh it
    if (res.status === 401 || res.status === 403) {
      const refreshRes = await fetch(`${baseUrl}/api/users/refresh-token`, {
        method: "GET",
        credentials: "include", // send httpOnly refresh token cookie
      });

      if (!refreshRes.ok) {
        // refresh token expired → logout
        localStorage.removeItem("User");
        localStorage.removeItem("token");
        localStorage.removeItem("isLogin");
        setWishlist([]);
        return;
      }

      const refreshData = await refreshRes.json();
      token = refreshData.accessToken;
      if (token) {
            localStorage.setItem("token", token);
          } else {
            localStorage.removeItem("token");
          }

      // retry wishlist request
      res = await fetch(`${baseUrl}/api/users/wishlist/${user.user_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    }

    const data = await res.json();
    setWishlist(data.wishlist || []);
  } catch (err) {
    console.error("Error fetching wishlist:", err);
  }
};

    fetchWishlist();
  }, []);

  // Persist locally
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("User") || "{}");
    const userId = user.user_id;
    if (userId) {
      localStorage.setItem(`wishlist_${userId}`, JSON.stringify(wishlist));
    }
  }, [wishlist]);

  const toggleWishlist = async (productId: string) => {
    const user = JSON.parse(localStorage.getItem("User") || "{}");
    const token = localStorage.getItem("token");
    if (!user.user_id || !token) return;

    const isAlreadyWishlisted = wishlist.includes(productId);

    // Optimistic update
    setWishlist((prev) =>
      isAlreadyWishlisted
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );

    try {
      const method = isAlreadyWishlisted ? "DELETE" : "POST";
      await fetch(`${baseUrl}/api/users/toggleWishlist`, {
        method,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          user_id: user.user_id,
          product_id: productId,
        }),
      });
    } catch (err) {
      console.error("Error updating wishlist:", err);
    }
  };

  const isWishlisted = (productId: string) => wishlist.includes(productId);

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isWishlisted }}>
      {children}
    </WishlistContext.Provider>
  );
};