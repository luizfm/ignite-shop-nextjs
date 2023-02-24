import * as RadixDialog from "@radix-ui/react-dialog";

import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/styles/components/side-menu";
import { X } from "phosphor-react";
import { theme } from "@/styles";

interface DialogProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  onOpenChange: () => void;
  hiddenTitle?: boolean;
}

export function SideMenu({
  description,
  title,
  hiddenTitle = false,
  children,
  onOpenChange,
}: DialogProps) {
  return (
    <RadixDialog.Root open onOpenChange={onOpenChange}>
      <RadixDialog.Portal>
        <DialogOverlay />
        <DialogContent>
          {!hiddenTitle && <DialogTitle>{title}</DialogTitle>}
          {description && (
            <RadixDialog.Description>{description}</RadixDialog.Description>
          )}
          {children}
          <DialogClose>
            <X size={24} color={theme.colors.gray100.value} />
          </DialogClose>
        </DialogContent>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}

export default SideMenu;
