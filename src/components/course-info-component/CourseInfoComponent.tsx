import type {ICourse} from "../../models/ICourse.ts";
import type {FC} from "react";
import "./CourseInfoComponent.css"

export type PropsType = {
    course: ICourse;
}

export const CourseInfoComponent: FC<PropsType> = ({course}) => {
    return (
        <ul className='my-7'>
            <li className='text-2xl font-bold'>
                {course.title}
            </li>
            <li className='text-1xl'>
                month duration: {course.monthDuration}
            </li>
            <li className='text-1xl' >
                hour duration: {course.hourDuration}
            </li>
            <li className='text-1xl'>
                modules of course: {course.modules}
            </li>
        </ul>
    );
};