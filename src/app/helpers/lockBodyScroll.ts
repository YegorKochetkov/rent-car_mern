function lockBodyScroll(isOpenMobileMenu: boolean): void {
	if (isOpenMobileMenu) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'inherit';
	}
}

export default lockBodyScroll;
