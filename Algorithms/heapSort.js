async function heapSort(arr, n) {
  for (var i = n / 2 - 1; i >= 0; i--) {
    if (hasPressedStop == true) {
      return;
    }
    await heapify(arr, n, i);
  }

  for (var i = n - 1; i > 0; i--) {
    if (hasPressedStop == true) {
      return;
    }

    var temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    arr[0].style.background = "cyan";
    arr[i].style.background = "goldenrod";
    swap(arr[0], arr[i]);
    await delayTime(delay);

    await heapify(arr, i, 0);
  }
}

async function heapify(arr, n, i) {
  if (hasPressedStop == true) {
    return;
  }
  var largest = i;
  var l = 2 * i + 1;
  var r = 2 * i + 2;

  if (
    l < n &&
    parseInt(arr[l].style.height) > parseInt(arr[largest].style.height)
  ) {
    largest = l;
    swap(arr[largest], arr[l]);
  }

  if (
    r < n &&
    parseInt(arr[r].style.height) > parseInt(arr[largest].style.height)
  ) {
    largest = r;
    swap(arr[largest], arr[r]);
  }

  if (largest != i) {
    var temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    swap(arr[i], arr[largest]);

    heapify(arr, n, largest);
  }
}

const heapSortbtn = document.querySelector(".heapSort");
heapSortbtn.addEventListener("click", async function () {
  let arr = document.querySelectorAll(".bar");
  let n = arr.length;

  hasPressedStop = false;
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  enableStopSortingBtn();
  await heapSort(arr, n);
  arr[0].style.background = "goldenrod";
  if (hasPressedStop == true) {
    disableSpeedSlider();
  } else {
    enableSortingBtn();
    enableSizeSlider();
  }
  enableNewArrayBtn();
  disableStopSortingBtn();
});
