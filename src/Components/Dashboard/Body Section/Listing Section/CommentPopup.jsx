    import { IoMdClose } from "react-icons/io";
    import styles from '@/styles/CommentPopup.module.css';
    import { useEffect } from "react";

    const CommentPopup = (props) => {
        useEffect(() => {
            // Prevent scrolling on the background content when the popup is open
            if (props.trigger) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'unset';
            }
        }, [props.trigger]);

        return ( 
            <div className={`${styles.commentpopup} ${props.trigger ? styles.active : ''}`}>
                <IoMdClose className={styles.close} onClick={() => props.setTrigger(false)} />
                <div className={`${styles.popupInner} inner-comments`}>                    
                    {props.children}
                </div>
            </div>
        );
    }
    
    export default CommentPopup;
