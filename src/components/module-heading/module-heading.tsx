interface ModuleHeadingProps {
  title: string;
  description: string;
}

const ModuleHeading = (props: ModuleHeadingProps) => {
  const { title, description } = props;

  return (
    <div className="mb-10">
      <h1 className="mb-4 text-2xl font-bold tracking-wide text-gray-950 lg:text-center lg:text-4xl">
        {title}
      </h1>
      <h2 className="text-sm text-gray-500 lg:text-lg">{description}</h2>
    </div>
  );
};

export { ModuleHeading };
