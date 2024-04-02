import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { BeatLoader } from 'react-spinners'
import { useDispatch } from 'react-redux'
import { deleteDraft } from '@/redux/features/draft-slice'
import Link from 'next/link'

const Tooltip = ({ id }: { id: string }) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)
    const router = useRouter();
    const dispatch = useDispatch()

    const handleDeleteDraft = async () => {
        setIsDeleting(true)

        const { data } = await axios.delete("/api/draft/" + id)
        dispatch(deleteDraft(data.deleted.id))

        setIsDeleting(false)
        setShowDeleteModal(false)
    }

    return (
        <>
            <div className='drop-shadow-[0_0_5px_rgba(0,0,0,0.20)] w-32 flex absolute -top-2 z-10 -left-14 flex-col items-center  mt-10 rounded' >
                <div className='bg-white w-4 h-4 absolute rotate-45 -top-1'></div>
                <div className='bg-white rounded text-sm font-medium py-4 px-6 flex flex-col items-start z-10 gap-2'>
                    <Link href={'/admin/' + id} className='text-slate-600 hover:text-slate-700'>Edit draft</Link>
                    <button onClick={() => setShowDeleteModal(true)} className='text-red-400 hover:text-red-500'>Delete draft</button>
                </div>
            </div>

            {showDeleteModal && (
                <div className='w-screen h-screen bg-black/70 fixed z-40 inset-0 flex justify-center items-center'>
                    <div className='w-[500px] rounded-xl bg-white p-8'>
                        <h2 className='text-lg font-semibold text-gray-800'>Are you absolutely sure?</h2>
                        <p className='text-sm'>This action cannot be undone. This will permanently delete your draft</p>

                        <div className='flex mt-4 justify-end gap-4'>
                            <Button onClick={() => setShowDeleteModal(false)} variant={'outline'}>Cancel</Button>
                            <Button onClick={handleDeleteDraft}>
                                {isDeleting ? (
                                    <BeatLoader
                                        color='#fff'
                                        loading={true}
                                        size={12}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                    />
                                ) : (
                                    "Continue"
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Tooltip
