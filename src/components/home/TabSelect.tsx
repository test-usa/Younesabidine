import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TabSelectProps {
  title: string;
  object: string[];
  handleFilterChange: (value: string) => void;
}

const TabSelect: React.FC<TabSelectProps> = ({
  object,
  title,
  handleFilterChange,
}) => {
  return (
    <div>
      <Select onValueChange={handleFilterChange}>
        <SelectTrigger className="w-full   border border-[#BAB8B8] text-[#888080] text-xs">
          <SelectValue placeholder={title} />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectGroup>
            {object.map((item) => (
              <SelectItem key={item} className="hover:bg-home" value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TabSelect;
