"use client";

import * as Yup from "yup";
import { IndexForm } from "@/components/admin/connectors/Form";
import { GithubIcon } from "@/components/icons/icons";
import { TextFormField } from "@/components/admin/connectors/Field";
import { HealthCheckBanner } from "@/components/health/healthcheck";

export default function Page() {
  return (
    <div className="mx-auto">
      <div className="mb-4">
        <HealthCheckBanner />
      </div>
      <div className="border-solid border-gray-600 border-b mb-4 pb-2 flex">
        <GithubIcon size="32" />
        <h1 className="text-3xl font-bold pl-2">Github PRs</h1>
      </div>

      {/* TODO: make this periodic */}
      <h2 className="text-xl font-bold pl-2 mb-2 mt-6 ml-auto mr-auto">
        Request Indexing
      </h2>
      <div className="border-solid border-gray-600 border rounded-md p-6">
        <IndexForm
          source="github"
          formBody={
            <>
              <TextFormField name="repo_owner" label="Owner of repo:" />
              <TextFormField name="repo_name" label="Name of repo:" />
            </>
          }
          validationSchema={Yup.object().shape({
            repo_owner: Yup.string().required(
              "Please enter the owner of the repo scrape e.g. danswer-ai"
            ),
            repo_name: Yup.string().required(
              "Please enter the name of the repo scrape e.g. danswer "
            ),
          })}
          initialValues={{
            repo_owner: "",
            repo_name: "",
          }}
          onSubmit={(isSuccess) => console.log(isSuccess)}
        />
      </div>
    </div>
  );
}