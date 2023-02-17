(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[3563],{"./packages/components/src/date-time/constants.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{u:function(){return TIMEZONELESS_FORMAT}});const TIMEZONELESS_FORMAT="yyyy-MM-dd'T'HH:mm:ss"},"./packages/components/src/date-time/utils.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{g:function(){return inputToDate}});var date_fns__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/components/node_modules/date-fns/esm/toDate/index.js");function inputToDate(input){return"string"==typeof input?new Date(input):(0,date_fns__WEBPACK_IMPORTED_MODULE_0__.Z)(input)}},"./packages/components/src/h-stack/component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var _ui_context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/ui/context/context-connect.ts"),_view__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/view/component.tsx"),_hook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/h-stack/hook.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedHStack(props,forwardedRef){const hStackProps=(0,_hook__WEBPACK_IMPORTED_MODULE_1__.R)(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_view__WEBPACK_IMPORTED_MODULE_2__.Z,{...hStackProps,ref:forwardedRef})}UnconnectedHStack.displayName="UnconnectedHStack";const HStack=(0,_ui_context__WEBPACK_IMPORTED_MODULE_3__.Iq)(UnconnectedHStack,"HStack");__webpack_exports__.Z=HStack;try{HStack.displayName="HStack",HStack.__docgenInfo={description:"`HStack` (Horizontal Stack) arranges child elements in a horizontal line.\n\n`HStack` can render anything inside.\n\n```jsx\nimport {\n\t__experimentalHStack as HStack,\n\t__experimentalText as Text,\n} from `@wordpress/components`;\n\nfunction Example() {\n\treturn (\n\t\t<HStack>\n\t\t\t<Text>Code</Text>\n\t\t\t<Text>is</Text>\n\t\t\t<Text>Poetry</Text>\n\t\t</HStack>\n\t);\n}\n```",displayName:"HStack",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},isReversed:{defaultValue:null,description:"@deprecated",name:"isReversed",required:!1,type:{name:"boolean"}},justify:{defaultValue:{value:"'space-between'"},description:"Horizontally aligns content if the `direction` is `row`, or vertically\naligns content if the `direction` is `column`.",name:"justify",required:!1,type:{name:"JustifyContent"}},direction:{defaultValue:{value:"'row'"},description:"The direction flow of the children content can be adjusted with\n`direction`. `column` will align children vertically and `row` will align\nchildren horizontally.",name:"direction",required:!1,type:{name:"FlexDirection"}},expanded:{defaultValue:{value:"true"},description:"Expands to the maximum available width (if horizontal) or height (if\nvertical).",name:"expanded",required:!1,type:{name:"boolean"}},wrap:{defaultValue:{value:"false"},description:"Determines if children should wrap.",name:"wrap",required:!1,type:{name:"boolean"}},alignment:{defaultValue:{value:"'edge'"},description:"Determines how the child elements are aligned.\n\n* `top`: Aligns content to the top.\n* `topLeft`: Aligns content to the top/left.\n* `topRight`: Aligns content to the top/right.\n* `left`: Aligns content to the left.\n* `center`: Aligns content to the center.\n* `right`: Aligns content to the right.\n* `bottom`: Aligns content to the bottom.\n* `bottomLeft`: Aligns content to the bottom/left.\n* `bottomRight`: Aligns content to the bottom/right.\n* `edge`: Aligns content to the edges of the container.\n* `stretch`: Stretches content to the edges of the container.",name:"alignment",required:!1,type:{name:'(string & {}) | "baseline" | "inherit" | "initial" | "left" | "center" | "right" | "bottom" | "bottomLeft" | "bottomRight" | "edge" | "stretch" | "top" | "topLeft" | "topRight" | ... 9 more ... | "normal"'}},spacing:{defaultValue:{value:"2"},description:"The amount of space between each child element. Spacing in between each child can be adjusted by using `spacing`.\nThe value of `spacing` works as a multiplier to the library's grid system (base of `4px`).",name:"spacing",required:!1,type:{name:"Width<string | number>"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | ... 507 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/h-stack/component.tsx#HStack"]={docgenInfo:HStack.__docgenInfo,name:"HStack",path:"packages/components/src/h-stack/component.tsx#HStack"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/h-stack/hook.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{R:function(){return useHStack}});var use_context_system=__webpack_require__("./packages/components/src/ui/context/use-context-system.js"),context_connect=__webpack_require__("./packages/components/src/ui/context/context-connect.ts"),component=__webpack_require__("./packages/components/src/flex/flex-item/component.tsx"),hook=__webpack_require__("./packages/components/src/flex/flex/hook.ts"),values=__webpack_require__("./packages/components/src/utils/values.js");const H_ALIGNMENTS={bottom:{align:"flex-end",justify:"center"},bottomLeft:{align:"flex-start",justify:"flex-end"},bottomRight:{align:"flex-end",justify:"flex-end"},center:{align:"center",justify:"center"},edge:{align:"center",justify:"space-between"},left:{align:"center",justify:"flex-start"},right:{align:"center",justify:"flex-end"},stretch:{align:"stretch"},top:{align:"flex-start",justify:"center"},topLeft:{align:"flex-start",justify:"flex-start"},topRight:{align:"flex-start",justify:"flex-end"}},V_ALIGNMENTS={bottom:{justify:"flex-end",align:"center"},bottomLeft:{justify:"flex-start",align:"flex-end"},bottomRight:{justify:"flex-end",align:"flex-end"},center:{justify:"center",align:"center"},edge:{justify:"space-between",align:"center"},left:{justify:"center",align:"flex-start"},right:{justify:"center",align:"flex-end"},stretch:{justify:"stretch"},top:{justify:"flex-start",align:"center"},topLeft:{justify:"flex-start",align:"flex-start"},topRight:{justify:"flex-start",align:"flex-end"}};var get_valid_children=__webpack_require__("./packages/components/src/ui/utils/get-valid-children.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function useHStack(props){const{alignment:alignment="edge",children:children,direction:direction,spacing:spacing=2,...otherProps}=(0,use_context_system.y)(props,"HStack"),align=function getAlignmentProps(alignment){let direction=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"row";if(!(0,values.Jf)(alignment))return{};const props="column"===direction?V_ALIGNMENTS:H_ALIGNMENTS;return alignment in props?props[alignment]:{align:alignment}}(alignment,direction),propsForFlex={children:(0,get_valid_children.W)(children).map(((child,index)=>{if((0,context_connect.H)(child,["Spacer"])){const childElement=child,_key=childElement.key||`hstack-${index}`;return(0,jsx_runtime.jsx)(component.Z,{isBlock:!0,...childElement.props},_key)}return child})),direction:direction,justify:"center",...align,...otherProps,gap:spacing};return(0,hook.k)(propsForFlex)}try{useHStack.displayName="useHStack",useHStack.__docgenInfo={description:"",displayName:"useHStack",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},isReversed:{defaultValue:null,description:"@deprecated",name:"isReversed",required:!1,type:{name:"boolean"}},justify:{defaultValue:{value:"'space-between'"},description:"Horizontally aligns content if the `direction` is `row`, or vertically\naligns content if the `direction` is `column`.",name:"justify",required:!1,type:{name:"JustifyContent"}},direction:{defaultValue:{value:"'row'"},description:"The direction flow of the children content can be adjusted with\n`direction`. `column` will align children vertically and `row` will align\nchildren horizontally.",name:"direction",required:!1,type:{name:"FlexDirection"}},expanded:{defaultValue:{value:"true"},description:"Expands to the maximum available width (if horizontal) or height (if\nvertical).",name:"expanded",required:!1,type:{name:"boolean"}},wrap:{defaultValue:{value:"false"},description:"Determines if children should wrap.",name:"wrap",required:!1,type:{name:"boolean"}},alignment:{defaultValue:{value:"'edge'"},description:"Determines how the child elements are aligned.\n\n* `top`: Aligns content to the top.\n* `topLeft`: Aligns content to the top/left.\n* `topRight`: Aligns content to the top/right.\n* `left`: Aligns content to the left.\n* `center`: Aligns content to the center.\n* `right`: Aligns content to the right.\n* `bottom`: Aligns content to the bottom.\n* `bottomLeft`: Aligns content to the bottom/left.\n* `bottomRight`: Aligns content to the bottom/right.\n* `edge`: Aligns content to the edges of the container.\n* `stretch`: Stretches content to the edges of the container.",name:"alignment",required:!1,type:{name:'(string & {}) | "baseline" | "inherit" | "initial" | "left" | "center" | "right" | "bottom" | "bottomLeft" | "bottomRight" | "edge" | "stretch" | "top" | "topLeft" | "topRight" | ... 9 more ... | "normal"'}},spacing:{defaultValue:{value:"2"},description:"The amount of space between each child element. Spacing in between each child can be adjusted by using `spacing`.\nThe value of `spacing` works as a multiplier to the library's grid system (base of `4px`).",name:"spacing",required:!1,type:{name:"Width<string | number>"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/h-stack/hook.tsx#useHStack"]={docgenInfo:useHStack.__docgenInfo,name:"useHStack",path:"packages/components/src/h-stack/hook.tsx#useHStack"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/ui/utils/get-valid-children.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{W:function(){return getValidChildren}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function getValidChildren(children){return"string"==typeof children?[children]:_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter((child=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)))}},"./node_modules/highlight-words-core/dist/index.js":function(module){module.exports=function(modules){var installedModules={};function __nested_webpack_require_187__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__nested_webpack_require_187__),module.loaded=!0,module.exports}return __nested_webpack_require_187__.m=modules,__nested_webpack_require_187__.c=installedModules,__nested_webpack_require_187__.p="",__nested_webpack_require_187__(0)}([function(module,exports,__nested_webpack_require_1468__){module.exports=__nested_webpack_require_1468__(1)},function(module,exports,__nested_webpack_require_1587__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _utils=__nested_webpack_require_1587__(2);Object.defineProperty(exports,"combineChunks",{enumerable:!0,get:function get(){return _utils.combineChunks}}),Object.defineProperty(exports,"fillInChunks",{enumerable:!0,get:function get(){return _utils.fillInChunks}}),Object.defineProperty(exports,"findAll",{enumerable:!0,get:function get(){return _utils.findAll}}),Object.defineProperty(exports,"findChunks",{enumerable:!0,get:function get(){return _utils.findChunks}})},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.findAll=function findAll(_ref){var autoEscape=_ref.autoEscape,_ref$caseSensitive=_ref.caseSensitive,caseSensitive=void 0!==_ref$caseSensitive&&_ref$caseSensitive,_ref$findChunks=_ref.findChunks,findChunks=void 0===_ref$findChunks?defaultFindChunks:_ref$findChunks,sanitize=_ref.sanitize,searchWords=_ref.searchWords,textToHighlight=_ref.textToHighlight;return fillInChunks({chunksToHighlight:combineChunks({chunks:findChunks({autoEscape:autoEscape,caseSensitive:caseSensitive,sanitize:sanitize,searchWords:searchWords,textToHighlight:textToHighlight})}),totalLength:textToHighlight?textToHighlight.length:0})};var combineChunks=exports.combineChunks=function combineChunks(_ref2){var chunks=_ref2.chunks;return chunks=chunks.sort((function(first,second){return first.start-second.start})).reduce((function(processedChunks,nextChunk){if(0===processedChunks.length)return[nextChunk];var prevChunk=processedChunks.pop();if(nextChunk.start<=prevChunk.end){var endIndex=Math.max(prevChunk.end,nextChunk.end);processedChunks.push({highlight:!1,start:prevChunk.start,end:endIndex})}else processedChunks.push(prevChunk,nextChunk);return processedChunks}),[])},defaultFindChunks=function defaultFindChunks(_ref3){var autoEscape=_ref3.autoEscape,caseSensitive=_ref3.caseSensitive,_ref3$sanitize=_ref3.sanitize,sanitize=void 0===_ref3$sanitize?defaultSanitize:_ref3$sanitize,searchWords=_ref3.searchWords,textToHighlight=_ref3.textToHighlight;return textToHighlight=sanitize(textToHighlight),searchWords.filter((function(searchWord){return searchWord})).reduce((function(chunks,searchWord){searchWord=sanitize(searchWord),autoEscape&&(searchWord=function escapeRegExpFn(string){return string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}(searchWord));for(var regex=new RegExp(searchWord,caseSensitive?"g":"gi"),match=void 0;match=regex.exec(textToHighlight);){var _start=match.index,_end=regex.lastIndex;_end>_start&&chunks.push({highlight:!1,start:_start,end:_end}),match.index===regex.lastIndex&&regex.lastIndex++}return chunks}),[])};exports.findChunks=defaultFindChunks;var fillInChunks=exports.fillInChunks=function fillInChunks(_ref4){var chunksToHighlight=_ref4.chunksToHighlight,totalLength=_ref4.totalLength,allChunks=[],append=function append(start,end,highlight){end-start>0&&allChunks.push({start:start,end:end,highlight:highlight})};if(0===chunksToHighlight.length)append(0,totalLength,!1);else{var lastIndex=0;chunksToHighlight.forEach((function(chunk){append(lastIndex,chunk.start,!1),append(chunk.start,chunk.end,!0),lastIndex=chunk.end})),append(lastIndex,totalLength,!1)}return allChunks};function defaultSanitize(string){return string}}])},"./packages/components/src/date-time/stories/date.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},WithEvents:function(){return WithEvents},WithInvalidDates:function(){return WithInvalidDates}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_date__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/date-time/date/index.tsx"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/date-time/stories/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const meta={title:"Components/DatePicker",component:_date__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{currentDate:{control:"date"},onChange:{action:"onChange",control:{type:null}}},parameters:{sourceLink:"packages/components/src/date-time",controls:{expanded:!0},docs:{source:{state:"open"}}}};__webpack_exports__.default=meta;const Template=_ref=>{let{currentDate:currentDate,onChange:onChange,...args}=_ref;const[date,setDate]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(currentDate);return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{setDate(currentDate)}),[currentDate]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_date__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,currentDate:date,onChange:newDate=>{setDate(newDate),null==onChange||onChange(newDate)}})};Template.displayName="Template";const Default=Template.bind({}),WithEvents=Template.bind({});WithEvents.args={currentDate:new Date,events:[{date:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.C)(2)},{date:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.C)(4)},{date:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.C)(6)},{date:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.C)(8)}]};const WithInvalidDates=Template.bind({});WithInvalidDates.args={currentDate:new Date,isInvalidDate:_utils__WEBPACK_IMPORTED_MODULE_3__.Q};try{ComponentMeta.displayName="ComponentMeta",ComponentMeta.__docgenInfo={description:"For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",displayName:"ComponentMeta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/date-time/stories/date.tsx#ComponentMeta"]={docgenInfo:ComponentMeta.__docgenInfo,name:"ComponentMeta",path:"packages/components/src/date-time/stories/date.tsx#ComponentMeta"})}catch(__react_docgen_typescript_loader_error){}}}]);