import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "./loader-module.css"


export const Loader = () => {

    return (
        <div class="line-wobble"></div>
    )
}


export const LoaderSkeleton = () => {

    return (
        <SkeletonTheme baseColor="#922B21" highlightColor="#922B21">
            <p>
                <Skeleton count={3} />
            </p>
        </SkeletonTheme>
    )
}