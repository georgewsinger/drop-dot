goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__346205__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__346205 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__346206__i = 0, G__346206__a = new Array(arguments.length -  0);
while (G__346206__i < G__346206__a.length) {G__346206__a[G__346206__i] = arguments[G__346206__i + 0]; ++G__346206__i;}
  args = new cljs.core.IndexedSeq(G__346206__a,0);
} 
return G__346205__delegate.call(this,args);};
G__346205.cljs$lang$maxFixedArity = 0;
G__346205.cljs$lang$applyTo = (function (arglist__346207){
var args = cljs.core.seq(arglist__346207);
return G__346205__delegate(args);
});
G__346205.cljs$core$IFn$_invoke$arity$variadic = G__346205__delegate;
return G__346205;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__346208__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__346208 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__346209__i = 0, G__346209__a = new Array(arguments.length -  0);
while (G__346209__i < G__346209__a.length) {G__346209__a[G__346209__i] = arguments[G__346209__i + 0]; ++G__346209__i;}
  args = new cljs.core.IndexedSeq(G__346209__a,0);
} 
return G__346208__delegate.call(this,args);};
G__346208.cljs$lang$maxFixedArity = 0;
G__346208.cljs$lang$applyTo = (function (arglist__346210){
var args = cljs.core.seq(arglist__346210);
return G__346208__delegate(args);
});
G__346208.cljs$core$IFn$_invoke$arity$variadic = G__346208__delegate;
return G__346208;
})()
;

return null;
});
