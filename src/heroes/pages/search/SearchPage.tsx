import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";

const SearchPage = () => {
  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="Busqueda de Superheroes"
        description="Descubre, explora y administra super heroes y villanos"
      />

      {/* Stats Dashboard */}
      <HeroStats />
    </>
  );
};

export default SearchPage;
