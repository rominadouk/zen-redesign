const createGoal = () => {

    return ( 
        // Modal Wrapper: fill entire viewport & center align content, vertically and horizontally. 
        // <div className="fixed pin z-50 overflow-auto bg-smoke-dark flex">
            <div id="new-goal-modal-bg" className="h-screen w-screen fixed pin z-50 overflow-auto bg-smoke-dark flex">
            <h1 className="object-top">New Goal</h1>
                <form>
                    <input type="text" name="goal-title" placeholder="e.g. Finish my designs" />
                </form>
            </div>

        // </div>
     );
}
 
export default createGoal;