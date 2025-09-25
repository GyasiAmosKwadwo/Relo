import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  return (
    <HeroSection
      onSearch={(params) => console.log('Hero search:', params)}
    />
  );
}