import { Button } from "@nextui-org/react"
import { MagnifyingGlass, PlusCircle  } from "@phosphor-icons/react"

export default function Component() {
    return (
        <div className="bg-[#F5F8FF] p-6 rounded-xl border-2 my-4">
            <div className="flex justify-between items-start mb-2">
                <h2 className="text-2xl font-semibold text-[#1B1B1B]">Have a question?</h2>
                <div
                    className="bg-black text-white text-xs px-2 py-1 h-6 flex justify-center items-center gap-1 rounded"
                >
                    <PlusCircle  size={14} />
                    Beta
                </div>
            </div>

            <p className="text-[#4B5563] mb-4">
                Get instant answers with AI powered search of property information and reviews.
            </p>

            <div className="flex gap-2 items-center">
                <div className="relative flex-1">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280] z-10">
                        <MagnifyingGlass size={20} />
                    </div>
                    <div className="relative">
                        <label className="absolute text-xs text-[#6B7280] left-10 top-2">
                            Ask a question
                        </label>
                        <input
                            className="w-full h-[52px] pl-10 pr-4 pt-6 pb-2 rounded-xl border border-[#E5E7EB] text-base outline-none focus:border-[#93B4FF] transition-colors"
                            placeholder="Is there free parking?"
                        />
                    </div>
                </div>
                <Button
                    isIconOnly
                    className="bg-[#93B4FF] w-[52px] h-[52px] min-w-[52px] rounded-full"
                >
                    <MagnifyingGlass size={20} color="white" weight="bold" />
                </Button>
            </div>
        </div>
    )
}