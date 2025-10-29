export default function ProfileImageSection() {
  return (
    <div className="grid grid-cols-6 items-center gap-4 border border-gray-500 p-4 m-8">
      <div className="col-span-1">
        <img
          src="/path/to/image.jpg"
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>
      <div className="col-span-5">
        <h2 className="text-lg font-semibold">Name</h2>
        <p className="text-gray-600">Email</p>
      </div>
    </div>
  );
}
