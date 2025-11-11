import { useEffect, useState } from "react";
import { WishlistContext } from "./WishlistContext";
import api from "@/lib/api";

export const WishlistProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [wishlist, setWishlist] = useState<string[]>([]);
  //const baseUrl = import.meta.env.VITE_API_URL;
  // Load from localStorage first (instant UI)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("User") || "{}");
    const userId = user.user_id;
    if (!userId) return;

    const stored = JSON.parse(
      localStorage.getItem(`wishlist_${userId}`) || "[]"
    );
    if (stored.length) setWishlist(stored);
  }, []);

  // Fetch from backend (sync latest)
  useEffect(() => {
    const fetchWishlist = async () => {
      const user = JSON.parse(localStorage.getItem("User") || "{}");
      if (!user.user_id) return;

      try {
        const res = await api.get(`api/users/wishlist/${user.user_id}`);
        setWishlist(res.data.wishlist || []);
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
      const payload = {
        user_id: user.user_id,
        product_id: productId,
      };

      if (isAlreadyWishlisted) {
        await api.delete("/api/users/toggleWishlist", { data: payload });
      } else {
        await api.post("/api/users/toggleWishlist", payload);
      }
    } catch (err) {
      console.error("Error updating wishlist:", err);
    }
  };

  const isWishlisted = (productId: string) => wishlist.includes(productId);

  return (
    <WishlistContext.Provider
      value={{ wishlist, toggleWishlist, isWishlisted }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
