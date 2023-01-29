import { Popover, Transition } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import * as React from "react";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { FiEye, FiX } from "react-icons/fi";

import Button from "@/components/buttons/Button";
import Checkbox from "@/components/forms/Checkbox";
import useServerTable from "@/components/hooks/useServerTable";
import ServerTable from "@/components/table/ServerTable";
import Typography from "@/components/typography/Typography";
import { mockQuery } from "@/lib/apiMock";
import { buildPaginatedTableURL } from "@/lib/table";
import { PaginatedApiResponse } from "@/types/api";
import { Role } from "@/types/entities/role";

type HeaderProps = {
  setLevelFilter: React.Dispatch<React.SetStateAction<string[]>>;
};

const filterOption = [
  {
    id: "name",
    name: "Nama",
  },
  {
    id: "nrp",
    name: "NRP",
  },
  {
    id: "fakultas",
    name: "Fakultas",
  },
];

const APIRespond = {
  code: 200,
  status: "berhasil",
  data: ["DataType"],
  meta: {
    last_page: "number",
    total: "number",
  },
};

export default function BasicTablePage() {
  //#region  //*=========== Table Definition ===========
  const { tableState, setTableState } = useServerTable<Role>({
    pageSize: 10,
  });

  const [levelFilter, setLevelFilter] = React.useState<string[]>([]);

  const levelFilterParam =
    levelFilter?.length > 0 ? `level=${levelFilter?.join(",")}` : "";

  const columns: ColumnDef<Role>[] = [
    {
      id: "name",
      accessorKey: "name",
      header: "Role",
    },
    {
      id: "level.name",
      accessorKey: "level.name",
      header: "Level",
    },
    {
      id: "actions",
      header: "Action",
      cell: () => (
        <Button variant="primary" leftIcon={FiEye}>
          Lihat
        </Button>
      ),
    },
  ];
  //#endregion  //*======== Table Definition ===========

  //#region  //*=========== Fetch Data ===========
  const url = buildPaginatedTableURL({
    baseUrl: "/hallo",
    tableState,
    additionalParam: [levelFilterParam],
  });

  const { data: queryData } = useQuery<PaginatedApiResponse<Role[]>, Error>(
    [url],
    mockQuery,
    {
      keepPreviousData: true,
    }
  );

  //#endregion  //*======== Fetch Data ===========

  return (
    <main>
      <section>
        <div className="layout min-h-screen py-20">
          <Typography as="h4" variant="h4" className="mt-4">
            Basic Table
          </Typography>

          <pre className="code">
            {JSON.stringify({ tableState, url }, null, 2)}
          </pre>

          <ServerTable
            columns={columns}
            data={queryData?.data ?? []}
            meta={queryData?.meta}
            header={<Header setLevelFilter={setLevelFilter} />}
            tableState={tableState}
            setTableState={setTableState}
            className="mt-8"
            withFilter
          />
          <Typography as="h3" variant="h3" className="mt-4">
            API Respond
          </Typography>
          <pre className="code">{JSON.stringify(APIRespond, null, 2)}</pre>
        </div>
      </section>
    </main>
  );
}

function Header({ setLevelFilter }: HeaderProps) {
  //#region  //*=========== Form ===========
  const methods = useForm({
    mode: "onTouched",
  });
  const { control, setValue } = methods;

  const filter = useWatch({
    control,
    name: "filter[]",
  });
  //#endregion  //*======== Form ===========

  React.useEffect(() => {
    setLevelFilter(filter);
  }, [filter, setLevelFilter]);

  const resetFilter = () => setValue("filter[]", []);

  return (
    <Popover className="relative">
      {({ close }: { close: React.MouseEventHandler<HTMLButtonElement> }) => (
        <>
          <Popover.Button as="div">
            <Button variant="primary" className="bg-secondary-400">
              Filter {filter?.length > 0 && `(${filter.length})`}
            </Button>
          </Popover.Button>

          <Transition
            as={React.Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-0 z-10 mt-3 w-screen max-w-xs transform sm:left-1/2 sm:-translate-x-1/2">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative bg-white p-4">
                  <FormProvider {...methods}>
                    <div className="flex items-center justify-between">
                      <Typography variant="h6">Filter by</Typography>
                      <div className="flex items-center gap-3">
                        <Typography
                          as="button"
                          variant="b3"
                          onClick={resetFilter}
                          className="text-primary-500 cursor-pointer font-semibold underline"
                        >
                          Reset Filter
                        </Typography>
                        <Button
                          variant="primary"
                          leftIcon={FiX}
                          onClick={close}
                        />
                      </div>
                    </div>
                    <Typography variant="s3" color="secondary" className="mt-4">
                      Filter
                    </Typography>
                    <div className="mt-2 grid grid-cols-2">
                      {filterOption.map((item) => (
                        <Checkbox
                          key={item.id}
                          size="sm"
                          name="filter"
                          value={item.id}
                          label={item.name}
                        />
                      ))}
                    </div>
                  </FormProvider>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
