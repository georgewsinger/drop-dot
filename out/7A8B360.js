goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10497__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10497 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10498__i = 0, G__10498__a = new Array(arguments.length -  0);
while (G__10498__i < G__10498__a.length) {G__10498__a[G__10498__i] = arguments[G__10498__i + 0]; ++G__10498__i;}
  args = new cljs.core.IndexedSeq(G__10498__a,0);
} 
return G__10497__delegate.call(this,args);};
G__10497.cljs$lang$maxFixedArity = 0;
G__10497.cljs$lang$applyTo = (function (arglist__10499){
var args = cljs.core.seq(arglist__10499);
return G__10497__delegate(args);
});
G__10497.cljs$core$IFn$_invoke$arity$variadic = G__10497__delegate;
return G__10497;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10500__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10500 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10501__i = 0, G__10501__a = new Array(arguments.length -  0);
while (G__10501__i < G__10501__a.length) {G__10501__a[G__10501__i] = arguments[G__10501__i + 0]; ++G__10501__i;}
  args = new cljs.core.IndexedSeq(G__10501__a,0);
} 
return G__10500__delegate.call(this,args);};
G__10500.cljs$lang$maxFixedArity = 0;
G__10500.cljs$lang$applyTo = (function (arglist__10502){
var args = cljs.core.seq(arglist__10502);
return G__10500__delegate(args);
});
G__10500.cljs$core$IFn$_invoke$arity$variadic = G__10500__delegate;
return G__10500;
})()
;

return null;
});
