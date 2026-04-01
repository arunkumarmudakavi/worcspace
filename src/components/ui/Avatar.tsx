"use client";

type AvatarProps = {
  firstName: string;
  lastName: string;
  image?: string;
  size?: number;
};

export default function Avatar({
  firstName,
  lastName,
  image,
  size = 35,
}: AvatarProps) {
  return image ? (
    <img
      src={image}
      alt={firstName + " " + lastName}
      style={{ width: size, height: size }}
      className="rounded-full object-cover cursor-pointer"
    />
  ) : (
    <div
      style={{ width: size, height: size }}
      className="rounded-full bg-[var(--secondary-color)] flex items-center justify-center text-white font-light cursor-pointer"
    >
      {firstName.charAt(0).toUpperCase()}
      {lastName.charAt(0).toUpperCase()}
    </div>
  );
}
