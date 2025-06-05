
import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ChevronDown, GraduationCap } from 'lucide-react';

interface TrackBottomSheetProps {
  value: string;
  onSelect: (track: string) => void;
  tracks: string[];
  placeholder?: string;
}

const TrackBottomSheet = ({ value, onSelect, tracks, placeholder = "Choisissez une filière" }: TrackBottomSheetProps) => {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (track: string) => {
    onSelect(track);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div className="relative">
          <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Button
            variant="outline"
            className="w-full pl-11 pr-10 py-3 h-auto border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-estim-green focus:border-estim-green transition-all text-sm justify-start bg-white text-left font-normal"
          >
            <span className={value ? "text-gray-900" : "text-gray-500"}>
              {value || placeholder}
            </span>
          </Button>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </SheetTrigger>
      
      <SheetContent side="bottom" className="h-[80vh] rounded-t-3xl border-t-2 border-gray-100">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-center text-xl font-bold text-gray-800">
            Choisissez votre filière
          </SheetTitle>
        </SheetHeader>
        
        <div className="space-y-3 overflow-y-auto max-h-[60vh] pb-4">
          {tracks.map((track, index) => (
            <Button
              key={index}
              onClick={() => handleSelect(track)}
              variant={value === track ? "default" : "outline"}
              className={`w-full p-4 h-auto text-left justify-start rounded-xl transition-all ${
                value === track 
                  ? "bg-gradient-to-r from-estim-green to-estim-gold text-white border-0 shadow-lg" 
                  : "border-2 border-gray-200 hover:border-estim-green hover:bg-estim-green/5"
              }`}
            >
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-5 h-5" />
                <span className="text-sm font-medium">{track}</span>
              </div>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default TrackBottomSheet;
