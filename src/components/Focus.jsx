const Focus = () => {
	return(
        <>
	<div
		tabIndex={0}
		className="collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content w-1/2 ml-[460px] border-2 border-pink-500"
	>
		<div className="collapse-title"><h2>Click to know more about 'PALWORLD'</h2></div>
		<div className="collapse-content">
			<p> Palworld is an upcoming action-adventure, survival, and monster-taming game created and published by Japanese developer Pocket Pair.</p>
		</div>
	</div>
    </>
    )
}

export { Focus };
