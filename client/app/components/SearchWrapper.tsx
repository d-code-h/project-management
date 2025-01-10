"use client";

import Header from "./Header";
import ProjectCard from "./ProjectCard";
import TaskCard from "./TaskCard";
import UserCard from "./UserCard";
import { useSearchQuery } from "@/store/api";
import { debounce } from "lodash";
import React, { ReactNode, useEffect, useState } from "react";

const Title = ({ text }: { text: string }) => {
  return <h2 className="my-3 text-2xl font-semibold">{text}</h2>;
};

const CardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col flex-wrap gap-3 sm:flex-row">{children}</div>
  );
};

const SearchWrapper = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    data: searchResults,
    isLoading,
    isError,
  } = useSearchQuery(searchTerm, {
    skip: searchTerm.length < 3,
  });

  const handleSearch = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    },
    300,
  );

  useEffect(() => {
    return handleSearch.cancel;
  }, [handleSearch.cancel]);

  return (
    <div className="p-8">
      <Header name="Search" />
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="w-1/2 rounded border p-3 shadow"
          onChange={handleSearch}
        />
      </div>
      <div className="p-5">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error occurred while fetching search results.</p>}
        {!isLoading && !isError && searchResults && (
          <>
            {searchResults.tasks && searchResults.tasks?.length > 0 && (
              <Title text="Tasks" />
            )}
            <CardContainer>
              {searchResults.tasks?.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </CardContainer>

            {searchResults.projects && searchResults.projects?.length > 0 && (
              <Title text="Projects" />
            )}
            <CardContainer>
              {searchResults.projects?.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </CardContainer>

            {searchResults.users && searchResults.users?.length > 0 && (
              <Title text="Users" />
            )}

            <CardContainer>
              {searchResults.users?.map((user) => (
                <UserCard key={user.userId} user={user} />
              ))}
            </CardContainer>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchWrapper;
