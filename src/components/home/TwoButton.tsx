import HomeButton from "./HomeButton";

const TwoButton = () => {
  return (
 
      <div className="flex gap-4 ">
        <HomeButton>Search</HomeButton>
        <HomeButton className=" bg-transparent ring-1 ring-black hover:ring-0">
          More Option
        </HomeButton>
      </div>
    
  );
};

export default TwoButton;
