/**
 * WordPress dependencies
 */
import {
	__experimentalItemGroup as ItemGroup,
	__experimentalVStack as VStack,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { globe, layout, symbolFilled } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import SidebarNavigationTitle from '../sidebar-navigation-title';
import { useLink } from '../routes/link';
import SidebarNavigationItem from '../sidebar-navigation-item';
import { useLocation } from '../routes';

export default function SidebarNavigationRoot() {
	const { params } = useLocation();
	const browseLink = useLink( {
		postType: undefined,
		postId: undefined,
	} );
	const templatesLink = useLink( {
		postType: 'wp_template',
		postId: undefined,
	} );
	const templatePartsLink = useLink( {
		postType: 'wp_template_part',
		postId: undefined,
	} );
	const isEditorPage =
		( ! params.postType && ! params.postId ) ||
		( !! params.postType && !! params.postId );
	const isTemplatesPage =
		params.postType === 'wp_template' && ! params.postId;
	const isTemplatePartsPage =
		params.postType === 'wp_template_part' && ! params.postId;

	return (
		<VStack spacing={ 6 }>
			<div className="edit-site-sidebar-navigation-root__header">
				<SidebarNavigationTitle
					parentTitle={ __( 'Dashboard' ) }
					title={ __( 'Design' ) }
					parentHref="index.php"
				/>
			</div>
			<nav>
				<ItemGroup>
					<SidebarNavigationItem
						{ ...browseLink }
						icon={ globe }
						aria-current={ isEditorPage ? 'page' : undefined }
					>
						{ __( 'Editor' ) }
					</SidebarNavigationItem>
					<SidebarNavigationItem
						{ ...templatesLink }
						icon={ layout }
						aria-current={ isTemplatesPage ? 'page' : undefined }
					>
						{ __( 'Templates' ) }
					</SidebarNavigationItem>
					<SidebarNavigationItem
						{ ...templatePartsLink }
						icon={ symbolFilled }
						aria-current={
							isTemplatePartsPage ? 'page' : undefined
						}
					>
						{ __( 'Template Parts' ) }
					</SidebarNavigationItem>
				</ItemGroup>
			</nav>
		</VStack>
	);
}