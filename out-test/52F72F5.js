goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15938__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15938 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15939__i = 0, G__15939__a = new Array(arguments.length -  0);
while (G__15939__i < G__15939__a.length) {G__15939__a[G__15939__i] = arguments[G__15939__i + 0]; ++G__15939__i;}
  args = new cljs.core.IndexedSeq(G__15939__a,0);
} 
return G__15938__delegate.call(this,args);};
G__15938.cljs$lang$maxFixedArity = 0;
G__15938.cljs$lang$applyTo = (function (arglist__15940){
var args = cljs.core.seq(arglist__15940);
return G__15938__delegate(args);
});
G__15938.cljs$core$IFn$_invoke$arity$variadic = G__15938__delegate;
return G__15938;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15941__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15941 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15942__i = 0, G__15942__a = new Array(arguments.length -  0);
while (G__15942__i < G__15942__a.length) {G__15942__a[G__15942__i] = arguments[G__15942__i + 0]; ++G__15942__i;}
  args = new cljs.core.IndexedSeq(G__15942__a,0);
} 
return G__15941__delegate.call(this,args);};
G__15941.cljs$lang$maxFixedArity = 0;
G__15941.cljs$lang$applyTo = (function (arglist__15943){
var args = cljs.core.seq(arglist__15943);
return G__15941__delegate(args);
});
G__15941.cljs$core$IFn$_invoke$arity$variadic = G__15941__delegate;
return G__15941;
})()
;

return null;
});
