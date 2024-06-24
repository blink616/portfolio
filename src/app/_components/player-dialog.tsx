'use client';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { DialogTitle } from '@radix-ui/react-dialog';

interface PlayerDialogProps {
  open: boolean;
  url: string;
  handleClose: () => void;
}
const PlayerDialog = ({ open, handleClose, url }: PlayerDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogTitle className='hidden p-2'>Video</DialogTitle>
      <DialogContent className='rounded-md border-none p-0'>
        <video
          src={url}
          autoPlay
          muted
          loop
          className='h-full w-full rounded-md object-cover'
        />
      </DialogContent>
    </Dialog>
  );
};

export default PlayerDialog;
