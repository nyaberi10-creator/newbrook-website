type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold tracking-wide text-blue-700">
      {children}
    </span>
  );
}