import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";

const HoverCardDemo = () => (
	<HoverCard.Root>
		<HoverCard.Trigger asChild>
			
        <h1 className='inline font-bold items-center bg-buttoncolor text-white rounded-lg p-4 hover:text-cardpurple transition-all'>Contact me</h1>
		
		</HoverCard.Trigger>
		<HoverCard.Portal>
			<HoverCard.Content
				className="w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade data-[state=open]:transition-all"
				sideOffset={5}
			>
				<div className="flex flex-col ">
					
					<div className="flex flex-col items-center justify-center gap-[15px] font-serif font-bold">
						Contact <br />
                        Doesn't Work
				</div>
				</div>

				<HoverCard.Arrow className="fill-white" />
			</HoverCard.Content>
		</HoverCard.Portal>
	</HoverCard.Root>
);

export default HoverCardDemo;
