import clsx from "clsx";

import BaseDialog from "@/components/dialog/BaseDialog";
import DesktopNavigation from "@/layouts/dashboard/DesktopNavigation";
import MobileNavigation from "@/layouts/dashboard/MobileNavigation";
import useDialogStore from "@/store/useDialogStore";

type DashboardLayoutProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function DashboardLayoutAdmin({
  children,
  className,
}: DashboardLayoutProps) {
  //#region  //*=========== Store ===========
  const open = useDialogStore.useOpen();
  const state = useDialogStore.useState();
  const handleClose = useDialogStore.useHandleClose();
  const handleSubmit = useDialogStore.useHandleSubmit();
  //#endregion  //*======== Store ===========

  return (
    <>
      <div className="min-h-full">
        <DesktopNavigation />

        <div className="bg-secondary-300 flex flex-col lg:pl-64">
          <MobileNavigation />

          <main
            className={clsx(
              // this is the padding-y
              // 'mb-2 lg:my-4',
              // 'mx-2 flex-1 overflow-y-auto rounded-2xl bg-white',
              // /**
              //  * 0.5rem: mobile's padding-y
              //  * 2rem: desktop's padding-y
              //  * 5rem: mobile header height
              //  */
              // 'min-h-[calc(100vh-5rem-0.5rem)] lg:min-h-[calc(100vh-2rem)]',
              // 'max-h-[calc(100vh-5rem-0.5rem)] lg:max-h-[calc(100vh-2rem)]',
              // 'bg-secondary-100',
              className
            )}
            tabIndex={-1}
          >
            {children}
          </main>

          <BaseDialog
            onClose={handleClose}
            onSubmit={handleSubmit}
            open={open}
            options={state}
          />
        </div>
      </div>
    </>
  );
}
