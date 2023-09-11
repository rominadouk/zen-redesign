const createGoal = () => {

    return ( 
        <div className="w-screen h-screen z-10">
            <div id="bg-opacity-black" className="bg-black h-screen w-screen">
            <h1 className="object-top">New Goal</h1>
                <form>
                    <input type="text" name="goal-title" placeholder="e.g. Finish my designs" />
                </form>
            </div>

        </div>
     );
}
 
export default createGoal;