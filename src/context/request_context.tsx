import { createContext, useState, ReactNode } from "react";

// Define types for the context state
export interface RequestContextType {
  requestQuery: string;
  setRequestQuery: (showCategories: string) => void;
}

// Create the context with a default value of undefined
// eslint-disable-next-line react-refresh/only-export-components
export const RequestContext = createContext<RequestContextType | undefined>(undefined);

// Create the provider component
const RequestProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // This state controls the query to be sent to db
  const [requestQuery, setRequestQuery] = useState('');


  const value = { requestQuery, setRequestQuery };

  return (
    <RequestContext.Provider value={value}>
      {children}
    </RequestContext.Provider>
  )
};

export default RequestProvider;
