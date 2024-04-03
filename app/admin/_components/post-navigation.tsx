"use client"
import { chooseActive } from '@/redux/features/active-slice'
import { getActive, getAllDraft } from '@/redux/store'
import { useDispatch, useSelector } from 'react-redux'

const PostNavigation = () => {
    const drafts = useSelector(getAllDraft)
    const active = useSelector(getActive)
    const dispatch = useDispatch()

    return (
        <div className='flex text-sm text-gray-600 font-medium mb-4'>
            <button onClick={() => dispatch(chooseActive("draft"))} className={`py-2 px-4 border-b-2 ${active === 'draft' ? "text-gray-800 border-gray-500" : "border-gray-300"}`}>
                Draft {drafts.filter(draft => !draft.isPublished).length}
            </button>

            <button onClick={() => dispatch(chooseActive("published"))} className={`py-2 px-4 border-b-2 ${active === 'published' ? "text-gray-800 border-gray-500" : "border-gray-300"}`}>
                Published {drafts.filter(draft => draft.isPublished).length}
            </button>
            <div className='border-b-2 border-gray-300 py-2 w-40 flex-1'></div>
        </div>
    )
}

export default PostNavigation
