import type {FC} from "react";
import type {Company} from "../../../../../models/IUserDummy.ts";

export const UserCompany: FC<{ company: Company }> = ({company}) => {
    return (
        <div>
            <h4>Company</h4>
            <p>Company Name: {company.name}</p>
            <p>Title: {company.title}</p>
            <p>Department: {company.department}</p>
        </div>
    );
};