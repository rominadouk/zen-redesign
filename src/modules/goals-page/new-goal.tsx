const createGoal = () => {

    return ( 
        // Modal Wrapper: fill entire viewport & center align content, vertically and horizontally. 
        <div className="flex justify-center">
            <div id="new-goal-modal-bg" className="h-screen w-screen fixed pin z-40 overflow-auto bg-smoke-dark flex">
            </div>
            <section className="z-50 fixed bg-off-white flex flex-col w-2/3 h-56 my-40">
            <h1 className="">New Goal</h1>
                <form className="flex flex-col w-72">
                    <label >Goal Name:</label>
                    <input id="goal-title" type="text" name="goal-title" placeholder="e.g. Finish my designs" />
                    <label>Complete By:</label>
                    <input id="date-to-complete" type="date" name="date-completed" placeholder="e.g. Date to be completed"/>
                </form>
            </section>
        </div>
     );
}
 
export default createGoal;