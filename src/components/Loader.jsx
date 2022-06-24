import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export const LoaderSkeleton = () => {

    return (
        <div>
            <Skeleton height={250} width={360} />
            <Skeleton count={5} width={360} />
        </div>
    )
}

export const Loader = () => {

    return (
        <div className="ItemListContainer">
            <LoaderSkeleton />
            <LoaderSkeleton />
            <LoaderSkeleton />
            <LoaderSkeleton />
            <LoaderSkeleton />
            <LoaderSkeleton />
            <LoaderSkeleton />
            <LoaderSkeleton />
        </div>
    )
}