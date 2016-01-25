goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39970__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39970 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39971__i = 0, G__39971__a = new Array(arguments.length -  0);
while (G__39971__i < G__39971__a.length) {G__39971__a[G__39971__i] = arguments[G__39971__i + 0]; ++G__39971__i;}
  args = new cljs.core.IndexedSeq(G__39971__a,0);
} 
return G__39970__delegate.call(this,args);};
G__39970.cljs$lang$maxFixedArity = 0;
G__39970.cljs$lang$applyTo = (function (arglist__39972){
var args = cljs.core.seq(arglist__39972);
return G__39970__delegate(args);
});
G__39970.cljs$core$IFn$_invoke$arity$variadic = G__39970__delegate;
return G__39970;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39973__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39973 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39974__i = 0, G__39974__a = new Array(arguments.length -  0);
while (G__39974__i < G__39974__a.length) {G__39974__a[G__39974__i] = arguments[G__39974__i + 0]; ++G__39974__i;}
  args = new cljs.core.IndexedSeq(G__39974__a,0);
} 
return G__39973__delegate.call(this,args);};
G__39973.cljs$lang$maxFixedArity = 0;
G__39973.cljs$lang$applyTo = (function (arglist__39975){
var args = cljs.core.seq(arglist__39975);
return G__39973__delegate(args);
});
G__39973.cljs$core$IFn$_invoke$arity$variadic = G__39973__delegate;
return G__39973;
})()
;

return null;
});
