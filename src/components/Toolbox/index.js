import { useSelector, useDispatch } from 'react-redux'
import cx from 'classnames';

import styles from './index.module.css'

import { COLORS, MENU_ITEMS } from '@/constants'
import {changeColor, changeBrushSize } from '@/slice/toolboxSlice'
import { socket } from "@/socket";

const Toolbox = () => {
    const dispatch = useDispatch()
    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem)
    const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL
    const showBrushToolOption = activeMenuItem === MENU_ITEMS.PENCIL || activeMenuItem === MENU_ITEMS.ERASER
    const {color, size} = useSelector((state) => state.toolbox[activeMenuItem])

    const updateBrushSize = (e) => {
        dispatch(changeBrushSize({item: activeMenuItem, size: e.target.value}))
        socket.emit('changeConfig', {color, size: e.target.value })
    }

    const updateColor = (newColor) => {
        dispatch(changeColor({item: activeMenuItem, color: newColor}))
        socket.emit('changeConfig', {color: newColor, size })
    }
    
    return (<div className={styles.toolboxContainer}>
        {showStrokeToolOption && <div className={styles.toolItem}>
            <h4 className={styles.toolText}>Stroke Color</h4>
            <div className={styles.itemContainer}>
                <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.BLACK})} style={{backgroundColor: COLORS.BLACK}} onClick={() => updateColor(COLORS.BLACK)}/>
                <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.RED})} style={{backgroundColor: COLORS.RED}} onClick={() => updateColor(COLORS.RED)}/>
                <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.ORANGE})} style={{backgroundColor: COLORS.ORANGE}} onClick={() => updateColor(COLORS.ORANGE)}/>
                <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.YELLOW})} style={{backgroundColor: COLORS.YELLOW}} onClick={() => updateColor(COLORS.YELLOW)}/>
                <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.PINK})} style={{backgroundColor: COLORS.PINK}} onClick={() => updateColor(COLORS.PINK)}/>
            </div>
            <div className={styles.itemContainer}>
                <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.BROWN})} style={{backgroundColor: COLORS.BROWN}} onClick={() => updateColor(COLORS.BROWN)}/>
                <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.GREEN})} style={{backgroundColor: COLORS.GREEN}} onClick={() => updateColor(COLORS.GREEN)}/>
                <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.BLUE})} style={{backgroundColor: COLORS.BLUE}} onClick={() => updateColor(COLORS.BLUE)}/>
                <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.INDIGO})} style={{backgroundColor: COLORS.INDIGO}} onClick={() => updateColor(COLORS.INDIGO)}/>
                <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.VIOLET})} style={{backgroundColor: COLORS.VIOLET}} onClick={() => updateColor(COLORS.VIOLET)}/>
            </div>
        </div>}
        {showBrushToolOption && <div className={styles.toolItem}>
            <h4 className={styles.toolText}>Brush Size</h4>
            <div className={styles.itemContainer}>
                <input type="range" min={1} max={10} step={1} onChange={updateBrushSize} value={size}/>
            </div>
        </div>}
    </div>)
}

export default Toolbox;