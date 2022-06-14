import "../pageStyles/testSlide.css"

export const TestSlide = () =>{

    const pages = document.querySelectorAll(".page");
    const translateAmount = 200; 
    let translate = 0;
    const slide = (direction) => {
        direction === "next" ? translate -= translateAmount : translate += translateAmount;
        pages.forEach(
                pages => (pages.style.transform = `translateX(${translate}%)`)
            );
            }

            // onClick="slide('next')"

    return (
        <>
        
        <div class="container">
            <div class="pages">
                <div class="page one">
                    <h1>PAGE 1</h1>
                    <div>
                        <button 
                        onClick={
                            () => {
                                slide("next")
                            }
                        }
                        
                        
                        >Next</button>
                    </div>
                </div>
    
                <div class="page two">
                    <h1>PAGE 2</h1>
                    <div>
                    <button 
                        onClick={
                            () => {
                                slide("prev")
                            }
                        }
                        
                        
                        >Prev</button>
                        <button 
                        onClick={
                            () => {
                                slide("next")
                            }
                        }
                        
                        
                        >Next</button>
                    </div>
                </div>
                <div class="page three">
                    <h1>PAGE 3</h1>
                    <div>
                    <button 
                        onClick={
                            () => {
                                slide("prev")
                            }
                        }
                        
                        
                        >Prev</button>
                         <button 
                        onClick={
                            () => {
                                slide("next")
                            }
                        }
                        
                        
                        >Next</button>
                    </div>
                </div>
                <div class="page four">
                    <h1>PAGE 4</h1>
                    <div>
                    <button 
                        onClick={
                            () => {
                                slide("next")
                            }
                        }
                        
                        
                        >Next</button>
                    </div>
                </div>    
            </div>
        </div>
        </>
    )
}