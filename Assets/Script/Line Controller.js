

//@ui {"widget":"separator"}
//@ui {"widget":"label", "label":"Link your line image transform here"}
//@input Component.ScreenTransform lineTransform

//@ui {"widget":"separator"}
//@ui {"widget":"label", "label":"Link your split material here"}
//@input Asset.Material splitMaterial


function Start() {
}

function Update() {

    let splitLinePosition = script.splitMaterial.mainPass.split_line_position;
    //map from material coordinates (-0.01 to 1.01, center at 0.5) to transform coordinates (-1.1 to 1.1, center at 0)
    let mappedPosition = (splitLinePosition - 0.5) * 2;
    script.lineTransform.anchors.setCenter(new vec2(mappedPosition, 0));

}

script.createEvent("OnStartEvent").bind(Start);
script.createEvent("UpdateEvent").bind(Update);