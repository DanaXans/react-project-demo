import type {ICourse} from "../../models/ICourse.ts";
import type {FC} from "react";
import "./CourseInfoComponent.css"

export type PropsType = {
    course: ICourse;
};

export const CourseInfoComponent: FC<PropsType> = ({course}: PropsType) => {
    return (
        <section className='my-7'>
            <h3 className='text-2xl font-bold'>
                {course.title}
            </h3>
            <p className='text-1xl font-medium'>
                month duration: {course.monthDuration}
            </p>
            <p className='text-1xl font-medium'>
                hour duration: {course.hourDuration}
            </p>
            <h4 className='font-bold'>Modules:</h4>
            <ul>
                {
                    course.modules.map((module, index) => (
                        <li key={index}>{module} </li>
                    ))
                }
            </ul>
        </section>
    );
};