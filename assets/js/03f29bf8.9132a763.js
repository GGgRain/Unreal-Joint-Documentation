"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4627],{5221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(4848),i=n(8453);const a={title:"Making A New Editor Node",sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:6},r=void 0,s={id:"guide_docs/Joint/Making-New-Editor-Node/Making-New-Editor-Node",title:"Making A New Editor Node",description:"What Is Editor Node?",source:"@site/docs/guide_docs/Joint/Making-New-Editor-Node/Making-New-Editor-Node.md",sourceDirName:"guide_docs/Joint/Making-New-Editor-Node",slug:"/guide_docs/Joint/Making-New-Editor-Node/",permalink:"/Unreal-Joint-Documentation/docs/guide_docs/Joint/Making-New-Editor-Node/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide_docs/Joint/Making-New-Editor-Node/Making-New-Editor-Node.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Making A New Editor Node",sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:6},sidebar:"GuideSidebar",previous:{title:"API Reference",permalink:"/Unreal-Joint-Documentation/docs/guide_docs/Joint/API_Reference/"},next:{title:"Installation",permalink:"/Unreal-Joint-Documentation/docs/guide_docs/Joint-Native/Installation/"}},d={},l=[{value:"What Is Editor Node?",id:"what-is-editor-node",level:2},{value:"What Is The Differences Between Editor Node And Node Instance?",id:"what-is-the-differences-between-editor-node-and-node-instance",level:2},{value:"Making a New Editor Node Class",id:"making-a-new-editor-node-class",level:2},{value:"Specifying Node Instance Class for Editor Node Class.",id:"specifying-node-instance-class-for-editor-node-class",level:3},{value:"Populating and Manipulating Custom Slates (Widgets)",id:"populating-and-manipulating-custom-slates-widgets",level:3},{value:"Using Volt on Your Node Slates",id:"using-volt-on-your-node-slates",level:3},{value:"Joint&#39;s Built-In Graph Node Slates",id:"joints-built-in-graph-node-slates",level:3},{value:"SDialogueNodePointerSlate",id:"sdialoguenodepointerslate",level:4},{value:"SContextTextEditor (WYSIWYG editor for text properties)",id:"scontexttexteditor-wysiwyg-editor-for-text-properties",level:4},{value:"Manipulating Pins",id:"manipulating-pins",level:3},{value:"Complex Editing Features",id:"complex-editing-features",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"what-is-editor-node",children:"What Is Editor Node?"}),"\n",(0,o.jsx)(t.p,{children:"Editor Nodes (a.k.a Graph Node) are the type of nodes that are used as interfaces between user interaction on the graph and the node object (Node instance) itself."}),"\n",(0,o.jsx)(t.h2,{id:"what-is-the-differences-between-editor-node-and-node-instance",children:"What Is The Differences Between Editor Node And Node Instance?"}),"\n",(0,o.jsxs)(t.p,{children:["In Joint, we name the actual node object as ",(0,o.jsx)(t.strong,{children:"Node instance"}),", and the graph node as ",(0,o.jsx)(t.strong,{children:"Editor Node."})]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Node instances"})," are the basic objects that will contain the data that will be utilized on runtime and also some logic runs on the runtime to manipulate the dialogue itself."]}),"\n",(0,o.jsxs)(t.p,{children:["On the other hand, ",(0,o.jsx)(t.code,{children:"Editor Nodes"})," are the objects that will only available on the graph and editor module in the development."]}),"\n",(0,o.jsx)(t.p,{children:"So if you want to make some properties available on the runtime\r\nEditor nodes are the objects that rely on the editor graph instance, and they represent the node instances they have in the graph."}),"\n",(0,o.jsx)(t.p,{children:"Editor nodes will handle some of the important data and process related to the editor feature including slate population of the graph node, and pin data control for the graph, and any addtional process to manipulate and pass over the data for the node instances that the editor node represent."}),"\n",(0,o.jsx)(t.p,{children:"You don't need to make unique editor nodes for each node instance classes on the system since the default editor node that joint will assign to the node instances (fragments, base nodes) already handles most of the logic with quite elegant and decent ways, and also the node instances now have some particular ways to manipulate the data in the editor node (ex, custom pin system)."}),"\n",(0,o.jsx)(t.p,{children:"Yet manipulating editor nodes in node instances has some limitations thus knowing how to work with Editor nodes (UDialogueEdGraphNode) is important for such conditions:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Slate control."}),"\n",(0,o.jsx)(t.li,{children:"Complex editing features and data control including pin data editing, better editor transaction and communication with the editor modules."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Still, making a whole new editor node class for a specific node might not fit well for your project's scale and budget. and even if your product's budget allows you to do so, it might be still a frustrating decision to make. So check out the later part of this document first and reconsider about it with the PM."}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"Especially in Joint 2.3.0 update, Pin data can be now fully controlled on the node instance side, so basically, you don't need to work with the editor node to accomplish such actions. We are going to describe about how to control the pin in editor nodes in this tutorial, but still controlling the pins on the node instance side is much more easier to go in most cases."})}),"\n",(0,o.jsx)(t.h2,{id:"making-a-new-editor-node-class",children:"Making a New Editor Node Class"}),"\n",(0,o.jsxs)(t.p,{children:["We only support implmenenting a new editor node class via ",(0,o.jsx)(t.strong,{children:"C++"}),", if you are working on the BP only project, then you are out of luck."]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"You can force to make a new editor node class in BP, but it will not work as intended. Please don't  do that."})}),"\n",(0,o.jsxs)(t.p,{children:["Start making a new editor node class by overriding ",(0,o.jsx)(t.code,{children:"UDialogueEdGraphNode"})," in C++.\r\nFor fragment editor node class, Please use ",(0,o.jsx)(t.code,{children:"UDialogueEdGraphNode_Fragment"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"specifying-node-instance-class-for-editor-node-class",children:"Specifying Node Instance Class for Editor Node Class."}),"\n",(0,o.jsxs)(t.p,{children:["Let's start this out by overriding ",(0,o.jsx)(t.code,{children:"SupportedNodeClass"})," function."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"SupportedNodeClass"})," is a function where you can set and tell the system about which class of the node instance object your editor node is designed to be used with. It can be C++ class or BP class as needed."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"TSubclassOf<UDialogueNodeBase> UDialogueEdFragment_Sequence::SupportedNodeClass()\r\n{\r\n\treturn UDF_Sequence::StaticClass();\r\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["'''note\r\nFor BP classes, you can use some convenient function that joint native provide to grab the BP class by its name, ",(0,o.jsx)(t.code,{children:"GetBPClassWithName"})," in ",(0,o.jsx)(t.code,{children:"UJointNativeFunctionLibrary"})," but please be careful with it since by any changes on its name can break your code.\r\n'''"]}),"\n",(0,o.jsx)(t.p,{children:"Once you overrided this class properly, now the editor will automatically pick and use your new editor node class for the specified node instance type when you newly create a node on the graph editor."}),"\n",(0,o.jsx)(t.p,{children:"'''warning\r\nIf multiple editor nodes specify the same node as its supported node class, then it will pick the first one on the class cache in the system singleton, which mean, you can not control or specify it on the editor side as you want. Just avoid doing it so.\r\n'''"}),"\n",(0,o.jsx)(t.p,{children:"Basically, it's the only mandatory stuff you need to do when you are implementing a new editor node class to the system. The following instructions are all optional, so please read and use them as you need."}),"\n",(0,o.jsx)(t.h3,{id:"populating-and-manipulating-custom-slates-widgets",children:"Populating and Manipulating Custom Slates (Widgets)"}),"\n",(0,o.jsx)(t.p,{children:"In Joint, unlike SDS1, now every custom slates that you need for your node class can be created (populated) and controlled via editor node class, and you don't need to make a whole new slate class for the custom widget (still you can if you need) and just patch up the slate fragment on the graph slate's layout."}),"\n",(0,o.jsx)(t.p,{children:"(\uc778\ub374\ud14c\uc774\uc158 \uc81c\uac70 \ubc14\ub78c)"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"\xa0 \xa0 /**\r\n\xa0 \xa0 \xa0* Use this function to populate any default widgets on the graph node body.\r\n\xa0 \xa0 \xa0* Access the slate and change the slate as you want.\r\n\xa0 \xa0 \xa0*\r\n\xa0 \xa0 \xa0* If you must change the slate after it is populated, you can access the slate with GetGraphNodeSlate(). Use this function on further customization and instancing.\r\n\xa0 \xa0 \xa0*\r\n\xa0 \xa0 \xa0* Note for SDS1 users : You don't need to create new node slate class and mess around the editor to assign the slate anymore because now we have this function.\r\n\xa0 \xa0 \xa0* See how the new native editor fragments utilize this function.\r\n\xa0 \xa0 \xa0*/\r\n\r\n\xa0 \xa0 virtual void ModifyGraphNodeSlate();\n"})}),"\n",(0,o.jsx)(t.p,{children:"Let's start making our custom slates by overriding this function, and check out how the nodes in the Joint Native is using this function to populate its own unique slates."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"void UDialogueEdFragment_Participant::ModifyGraphNodeSlate()\r\n{\r\n\t//Abort if we can not get the graph node slate instance.\r\n\tif (!GetGraphNodeSlate().IsValid()) return;\r\n\r\n\tconst TSharedPtr<SDialogueGraphNodeBase> NodeSlate = GetGraphNodeSlate();\r\n\r\n\tParticipantBox = SNew(SVerticalBox);\r\n\r\n\tNodeSlate->CenterContentBox->AddSlot()\r\n\t\t.HAlign(HAlign_Fill)\r\n\t\t//.VAlign(VAlign_Fill)\r\n\t\t.Padding(FJointEditorStyle::Margin_Frame)\r\n\t\t[\r\n\t\t\tParticipantBox.ToSharedRef()\r\n\t\t];\r\n\r\n\tUpdateSlate();\r\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"The actual result is as following:"}),"\n",(0,o.jsx)(t.p,{children:"(\uc0ac\uc9c4 \ucd94\uac00)"}),"\n",(0,o.jsx)(t.p,{children:"In ModifyGraphNodeSlate(), you can populate the initial slates you can use to decorate your graph node. One thing that you must know is that this function will not be triggered again after the graph refreshing request. thus you can not use this function to update your slate, but only initializing."}),"\n",(0,o.jsx)(t.p,{children:"if you need a slate that doesn't change over time and change on the other propertie's modifications, it will do anything, but if you need to make your slate be updated according to some property modification, then you have to manually update your slate on somewhere else."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"\xa0 \xa0 /**\r\n\r\n\xa0 \xa0 \xa0* Callback for the node instance's property change event. Override and use this function to implement actions for the property change.\r\n\xa0 \xa0 \xa0* By default, it is used to call UpdatePins, RequestPopulationOfNodeTagWidgets and NodeConnectionListChanged.\r\n\xa0 \xa0 \xa0*/\r\n\r\n\xa0 \xa0 virtual void OnNodeInstancePropertyChanged(const FPropertyChangedEvent& PropertyChangedEvent, const FString& PropertyName);\n"})}),"\n",(0,o.jsx)(t.p,{children:"OnNodeInstancePropertyChanged() is one of the best places you can update your slate as you need. This function will be executed whenever any properties on the node instance have been changed, so you can do whatever you need for your slate on here."}),"\n",(0,o.jsxs)(t.p,{children:["For example, In Joint Native, ",(0,o.jsx)(t.code,{children:"UDialogueEdFragment_SpeakerAndListener"})," updates its slate on OnNodeInstancePropertyChanged like this."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'void UDialogueEdFragment_SpeakerAndListener::OnNodeInstancePropertyChanged(\r\n\tconst FPropertyChangedEvent& PropertyChangedEvent,\r\n\tconst FString& PropertyName)\r\n{\r\n\tSuper::OnNodeInstancePropertyChanged(PropertyChangedEvent, PropertyName);\r\n\r\n\tUpdateSlate();\r\n}\r\n\r\n\r\nvoid UDialogueEdFragment_SpeakerAndListener::UpdateSlate()\r\n{\r\n\tif (!GetGraphNodeSlate().IsValid()) return;\r\n\r\n\tconst TSharedPtr<SDialogueGraphNodeBase> NodeSlate = GetGraphNodeSlate();\r\n\r\n\tSpeakersBox->ClearChildren();\r\n\tListenersBox->ClearChildren();\r\n\r\n\tUDF_SpeakerAndListener* SpeakerAndListener = GetCastedNodeInstance<UDF_SpeakerAndListener>();\r\n\r\n\tif (SpeakerAndListener == nullptr) return;\r\n\r\n\r\n\tfor (int i = 0; i < SpeakerAndListener->Listeners.Num(); ++i)\r\n\t{\r\n\t\tif (!SpeakerAndListener->Listeners.IsValidIndex(i)) continue;\r\n\r\n\t\tFDialogueNodePointer& Listener = SpeakerAndListener->Listeners[i];\r\n\r\n\t\tconst TAttribute<FText> DisplayText_Attr = TAttribute<FText>::Create(TAttribute<FText>::FGetter::CreateLambda(\r\n\t\t\t[Listener]\r\n\t\t\t{\r\n\t\t\t\tif (Listener.Node == nullptr) return LOCTEXT("NoParticipant", "No Participant Specified");\r\n\t\t\t\tif (const UDF_Participant* CastedNode = Cast<UDF_Participant>(Listener.Node.Get()))\r\n\t\t\t\t\treturn FText::FromString(\r\n\t\t\t\t\t\tCastedNode->ParticipantTag.ToString());\r\n\r\n\t\t\t\treturn FText::GetEmpty();\r\n\t\t\t}));\r\n\r\n\t\tListenersBox->AddSlot()\r\n\t\t[\r\n\t\t\tSNew(SDialogueNodePointerSlate)\r\n\t\t\t.GraphContextObject(this)\r\n\t\t\t.DisplayName(DisplayText_Attr)\r\n\t\t\t.PointerToStructure(&Listener)\r\n\t\t\t.bShouldShowDisplayName(true)\r\n\t\t\t.bShouldShowNodeName(true)\r\n\r\n\t\t];\r\n\t}\r\n\r\n\tfor (int i = 0; i < SpeakerAndListener->Speakers.Num(); ++i)\r\n\t{\r\n\t\tif (!SpeakerAndListener->Speakers.IsValidIndex(i)) continue;\r\n\r\n\t\tFDialogueNodePointer& Speaker = SpeakerAndListener->Speakers[i];\r\n\r\n\t\tconst TAttribute<FText> DisplayText_Attr = TAttribute<FText>::Create(TAttribute<FText>::FGetter::CreateLambda(\r\n\t\t\t[Speaker]\r\n\t\t\t{\r\n\t\t\t\tif (Speaker.Node == nullptr) return LOCTEXT("NoParticipant", "No Participant Specified");\r\n\t\t\t\tif (const UDF_Participant* CastedNode = Cast<UDF_Participant>(Speaker.Node.Get()))\r\n\t\t\t\t\treturn FText::FromString(\r\n\t\t\t\t\t\tCastedNode->ParticipantTag.ToString());\r\n\r\n\t\t\t\treturn FText::GetEmpty();\r\n\t\t\t}));\r\n\r\n\t\tSpeakersBox->AddSlot()\r\n\t\t[\r\n\t\t\tSNew(SDialogueNodePointerSlate)\r\n\t\t\t.GraphContextObject(this)\r\n\t\t\t.DisplayName(DisplayText_Attr)\r\n\t\t\t.PointerToStructure(&Speaker)\r\n\t\t\t.bShouldShowDisplayName(true)\r\n\t\t\t.bShouldShowNodeName(true)\r\n\t\t];\r\n\t}\r\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"In UDialogueEdFragment_SpeakerAndListener, it populates two custom vertical box on its layout and use that box to shows the widget that indicates each speakers and listeners that are assigend to the node, and update the content of the box in OnNodeInstancePropertyChanged() with a function named UpdateSlate()."}),"\n",(0,o.jsxs)(t.p,{children:["You can see that we are accessing the graph node slate via ",(0,o.jsx)(t.code,{children:"GetGraphNodeSlate"})," and populating our slates on a predefined layout on the slate named ",(0,o.jsx)(t.code,{children:"CenterContentBox"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"SDialogueGraphNodeBase"}),"has following layout slates :"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"\xa0 \xa0 TSharedPtr<SBorder> NodeBody;\r\n\xa0 \xa0 \r\n\xa0 \xa0 TSharedPtr<SHorizontalBox> NameBox;\r\n\r\n\xa0 \xa0 TSharedPtr<SVerticalBox> CenterWholeBox;\r\n\r\n\xa0 \xa0 TSharedPtr<SVerticalBox> CenterContentBox;\r\n\r\n\xa0 \xa0 TSharedPtr<SWrapBox> SubNodeBox;\r\n\r\n\xa0 \xa0 TSharedPtr<SVerticalBox> NodeTagBox;\r\n\r\n\xa0 \xa0 TSharedPtr<SVerticalBox> PropertyDisplayBox;\n"})}),"\n",(0,o.jsx)(t.p,{children:"They are all guaranteed to be available after the graph node slate initalization stage, which means the editor initialization."}),"\n",(0,o.jsx)(t.p,{children:"You can grab a layout slate as you want and attach a slate from there."}),"\n",(0,o.jsx)(t.p,{children:"'''note\r\nWe are not going to go through all the steps related to the slate system here. Check out the other materials for your need."}),"\n",(0,o.jsx)(t.p,{children:"And if you need, you can check out some of the editor nodes in Joint Native to start off how to make your own editor node slate with.\r\n'''"}),"\n",(0,o.jsx)(t.h3,{id:"using-volt-on-your-node-slates",children:"Using Volt on Your Node Slates"}),"\n",(0,o.jsx)(t.p,{children:"Joint provide a strong slate animation library called Volt and every animation effects on the editor and graph are made with and powered by Volt,"}),"\n",(0,o.jsxs)(t.p,{children:["You can also use that in your graph node slates too! In fact, Volt is licensed under MIT license, so if you need, then it is okay to fork it and use it on your own product. (See the official GitHub repository. (",(0,o.jsx)(t.a,{href:"https://github.com/GGgRain/Unreal-Volt",children:"https://github.com/GGgRain/Unreal-Volt"}),"))"]}),"\n",(0,o.jsx)(t.p,{children:"'''note\r\nVolt is completely independent module from the Joint and JointEditor Module. You need to include the Volt, VoltCore module to your module if you are working on the other module than Joint, JointNative, JointEditor modules."}),"\n",(0,o.jsx)(t.p,{children:"Here is the brief explanation for each modules, please check out and use these as you need:"}),"\n",(0,o.jsx)(t.p,{children:"VoltCore : The framework itself. it includes all the classes to animate your slates. This is necessary if you want to work with Volt.\r\nVolt : The content module for the animations. It only includes the animation modules and animations themselves. Use this module when you need templete classes for Volt and slate animations. This module is dependent on VoltCore.\r\n'''"}),"\n",(0,o.jsx)(t.p,{children:"We are not going to take a look at all the details you have to know about Volt to use it, instead we will learn how to quick-start it from the beginning. Check out our official documentation about Volt on the official Github repository."}),"\n",(0,o.jsx)(t.p,{children:"Let's assume that you are going to use Volt on your slates on your custom graph nodes.\r\nGraphNode slates will have its own UVoltAnimationManager inside, so as long as your slate sticks with the node slate, you don't need to implement a whole new VoltAnimationManager."}),"\n",(0,o.jsxs)(t.p,{children:["Try accessing the existing animation manager via ",(0,o.jsx)(t.code,{children:"SDialogueGraphNodeBase::GetAnimationManager()"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"\xa0 \xa0 /**\r\n\xa0 \xa0 \xa0* Get the Volt animation manager that handles the slate animations on the node.\r\n\xa0 \xa0 \xa0* @return The Volt animation manager of the graph node slate.\r\n\xa0 \xa0 \xa0*/\r\n\xa0 \xa0 UVoltAnimationManager* GetAnimationManager() const;\n"})}),"\n",(0,o.jsxs)(t.p,{children:["It is guaranteed to be accessible on almost every stage of the lifecycle of the slate, and even if it is not present yet, it will try to create a new instance and handle you the reference of that newly created instance once you try to access that manager via ",(0,o.jsx)(t.code,{children:"SDialogueGraphNodeBase::GetAnimationManager()"}),"."]}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsx)(t.p,{children:"Please let us know if it was not accessible via this function, we still can not guarantee it 10/10 because there might be some unfortunate occasions"})}),"\n",(0,o.jsx)(t.p,{children:"Once you grab that instance, then now you can animate your slates with that instance."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"if (UVolt_ASA_Expand* Animation = VOLT_GET_ANIMATION<UVolt_ASA_Expand>(UVolt_ASA_Expand::StaticClass()))\r\n{\r\n\tVOLT_PLAY_ANIM(GetAnimationManager(), NodeBody, Animation); // In header; TSharedPtr<SBorder> NodeBody; \r\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"Here is an example that you can find in Joint Editor, which is actually the part of the code that we animates the graph node slate with expanding animation when the drag-drop operation moves onto the slate."}),"\n",(0,o.jsx)(t.h3,{id:"joints-built-in-graph-node-slates",children:"Joint's Built-In Graph Node Slates"}),"\n",(0,o.jsx)(t.p,{children:"JointEditor module involves various helpful slate classes that you can use on your fragment to boost your productivity."}),"\n",(0,o.jsx)(t.h4,{id:"sdialoguenodepointerslate",children:"SDialogueNodePointerSlate"}),"\n",(0,o.jsxs)(t.p,{children:["SDialogueNodePointerSlate is a slate class that can be used to indicate and edit a single node pointer structure (",(0,o.jsx)(t.code,{children:"FDialogueNodePointer"}),")."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"//In DialogueEdFragment_SpeakerAndListener.cpp...\r\n\r\nSNew(SDialogueNodePointerSlate)\r\n\t\t\t.GraphContextObject(this)\r\n\t\t\t.DisplayName(DisplayText_Attr)\r\n\t\t\t.PointerToStructure(&Speaker)\r\n\t\t\t.bShouldShowDisplayName(true)\r\n\t\t\t.bShouldShowNodeName(true)\r\n\t\t\t\n"})}),"\n",(0,o.jsx)(t.p,{children:"You can populate it on the layout and feed structure's pointer to the slate to make the slate display that structure."}),"\n",(0,o.jsx)(t.p,{children:"Check out Joint native's DialogueEdFragment_SpeakerAndListener.cpp for the further details."}),"\n",(0,o.jsx)(t.h4,{id:"scontexttexteditor-wysiwyg-editor-for-text-properties",children:"SContextTextEditor (WYSIWYG editor for text properties)"}),"\n",(0,o.jsx)(t.p,{children:"Joint provides simple WYSIWYG editor for the text editing."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"SAssignNew(ContextTextEditor, SContextTextEditor)\r\n\t\t.Text(ContextText_Attr)\r\n\t\t.TableToEdit(TableToEdit_Attr)\r\n\t\t.bUseStyling(bUseStyler_Attr)\r\n\t\t.OnTextChanged_UObject(this, &UDialogueEdFragment_Text::OnTextChange)\r\n\t\t.OnTextCommitted_UObject(this, &UDialogueEdFragment_Text::OnTextCommitted)\n"})}),"\n",(0,o.jsx)(t.p,{children:"It will take the text attribute for the text being displayed on the editor, and take another attribute that refers to the textstyle table for the styling."}),"\n",(0,o.jsxs)(t.p,{children:["It will not work as a WYSIWYG editor if you don't set ",(0,o.jsx)(t.strong,{children:"bUseStyling"})," true even if you provided a valid textstyle table to the slate, if it is false, it will work just same as a simple text box for the text editing."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Please notice that the update on the text on the slate will not be replicated back to the original property"}),"! You must manually update it via ``OnTextChanged, OnTextCommitted` instead."]}),"\n",(0,o.jsxs)(t.p,{children:["Check how ",(0,o.jsx)(t.code,{children:"UDialogueEdFragment_Text"})," is handling the update on the slate."]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"It is also utilizing editor transactions here to notify the modifications on the objects to the editor and record them. It will be a good, solid example for the transactions on the editor nodes either."})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'\r\nvoid UDialogueEdFragment_Text::OnTextChange(const FText& Text)\r\n{\r\n\tUDF_Text* CastedNode = GetCastedNodeInstance<UDF_Text>();\r\n\r\n\tif (!bHasTransaction)\r\n\t{\r\n\t\tGEditor->BeginTransaction(FText::FromString("Modify Context Text"));\r\n\r\n\t\tbHasTransaction = true;\r\n\t}\r\n\r\n\tCastedNode->Modify();\r\n\t\r\n\tconst FText SavedText = CastedNode->Text;\r\n\t\r\n\tFString OutKey, OutNamespace;\r\n\r\n\tconst FString Namespace = FTextInspector::GetNamespace(SavedText).Get(FString());\r\n\tconst FString Key = FTextInspector::GetKey(SavedText).Get(FString());\r\n\t\r\n\t//Holds new text and let engine caches this text in.\r\n\tFJointEdUtils::DialogueText_StaticStableTextIdWithObj(\r\n\t\tthis,\r\n\t\tIEditableTextProperty::ETextPropertyEditAction::EditedSource,\r\n\t\tText.ToString(),\r\n\t\tNamespace,\r\n\t\tKey,\r\n\t\tOutNamespace,\r\n\t\tOutKey\r\n\t\t);\r\n\r\n\tCastedNode->Text = FText::ChangeKey(FTextKey(OutNamespace),FTextKey(OutKey),Text);\r\n\t\r\n}\r\n\r\nvoid UDialogueEdFragment_Text::OnTextCommitted(const FText& Text, ETextCommit::Type Arg)\r\n{\r\n\tUDF_Text* CastedNode = GetCastedNodeInstance<UDF_Text>();\r\n\r\n\tif (!bHasTransaction)\r\n\t{\r\n\t\tGEditor->BeginTransaction(FText::FromString("Modify Context Text"));\r\n\r\n\t\tbHasTransaction = true;\r\n\t}\r\n\r\n\tCastedNode->Modify();\r\n\r\n\r\n\tconst FText SavedText = CastedNode->Text;\r\n\t\r\n\tFString OutKey, OutNamespace;\r\n\r\n\tconst FString Namespace = FTextInspector::GetNamespace(SavedText).Get(FString());\r\n\tconst FString Key = FTextInspector::GetKey(SavedText).Get(FString());\r\n\r\n\t//Holds new text and let engine caches this text in. This is fundamental when it comes to the \r\n\tFJointEdUtils::DialogueText_StaticStableTextIdWithObj(\r\n\t\tthis,\r\n\t\tIEditableTextProperty::ETextPropertyEditAction::EditedSource,\r\n\t\tText.ToString(),\r\n\t\tNamespace,\r\n\t\tKey,\r\n\t\tOutNamespace,\r\n\t\tOutKey\r\n\t\t);\r\n\r\n\tCastedNode->Text = FText::ChangeKey(FTextKey(OutNamespace),FTextKey(OutKey),Text);\r\n\r\n\tif (bHasTransaction)\r\n\t{\r\n\t\tGEditor->EndTransaction();\r\n\r\n\t\tbHasTransaction = false;\r\n\t}\r\n}\n'})}),"\n",(0,o.jsx)(t.h3,{id:"manipulating-pins",children:"Manipulating Pins"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Pins"})," are the objects that will be displayed right next to the node (left and right) allowing you to getter any possible connections with other nodes."]}),"\n",(0,o.jsx)(t.p,{children:"Using custom pins can boost your process and help you implement unique fragments that fit to your needs."}),"\n",(0,o.jsx)(t.p,{children:"For example, if your dialogue fragment need to control the flow of the dialogue by the conditional switching, you can provide multiple pins for each branches your fragment needs and getter the nodes attached to those pins and use that as you want, or if you want to play some additional dialogue lines while following the main flow, you can grab some of the nodes through those additional pins and play them in transient dialogue instances your fragment creates. (This is how we implemented this scene in the official showcase video)"}),"\n",(0,o.jsx)(t.p,{children:"'''note\r\nAbout making a custom pin, node instance's easy custom pin system will let you create new custom pins and control them without implementing a new editor node. but still, making it with custom editor node class will work in more clearer way in many other cases. Please check out this article.\r\n'''"}),"\n",(0,o.jsx)(t.h3,{id:"complex-editing-features",children:"Complex Editing Features"}),"\n",(0,o.jsx)(t.p,{children:"Unreal always have those stuff only can be controlled via C++, and sometimes only in the editor modules, not present in runtime modules."}),"\n",(0,o.jsx)(t.p,{children:"In fact, One of the most fundamental reasons of having explict editor nodes for each node instances on the graph comes out from here. There are some useful editor features that surely will improve your productivity, and we are going to look at those one by one."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var o=n(6540);const i={},a=o.createContext(i);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);