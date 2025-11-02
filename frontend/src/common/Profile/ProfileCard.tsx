interface ProfileCardProps {
  profileCardIcon: string | React.ReactNode;
  profileCardTitle: string;
  profileCardDescription: string;
}
const ProfileCard = ({
  profileCardIcon,
  profileCardTitle,
  profileCardDescription,
}: ProfileCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center
        w-full
        aspect-square
        max-w-[250px]
        border border-gray-300
        hover:shadow-lg
        transition-all duration-300
        cursor-pointer
        bg-white">
      <div className="pb-2 text-3xl">
        {typeof profileCardIcon === "string" ? (
          <img src={profileCardIcon} alt={profileCardTitle} />
        ) : (
          profileCardIcon
        )}
      </div>

      <p className="font-semibold text-sm">{profileCardTitle}</p>
      <p className="text-xs text-gray-400 text-center px-2">
        {profileCardDescription}
      </p>
    </div>
  );
};

export default ProfileCard;
