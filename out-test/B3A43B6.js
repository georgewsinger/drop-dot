goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38070__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38070 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38071__i = 0, G__38071__a = new Array(arguments.length -  0);
while (G__38071__i < G__38071__a.length) {G__38071__a[G__38071__i] = arguments[G__38071__i + 0]; ++G__38071__i;}
  args = new cljs.core.IndexedSeq(G__38071__a,0);
} 
return G__38070__delegate.call(this,args);};
G__38070.cljs$lang$maxFixedArity = 0;
G__38070.cljs$lang$applyTo = (function (arglist__38072){
var args = cljs.core.seq(arglist__38072);
return G__38070__delegate(args);
});
G__38070.cljs$core$IFn$_invoke$arity$variadic = G__38070__delegate;
return G__38070;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38073__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38073 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38074__i = 0, G__38074__a = new Array(arguments.length -  0);
while (G__38074__i < G__38074__a.length) {G__38074__a[G__38074__i] = arguments[G__38074__i + 0]; ++G__38074__i;}
  args = new cljs.core.IndexedSeq(G__38074__a,0);
} 
return G__38073__delegate.call(this,args);};
G__38073.cljs$lang$maxFixedArity = 0;
G__38073.cljs$lang$applyTo = (function (arglist__38075){
var args = cljs.core.seq(arglist__38075);
return G__38073__delegate(args);
});
G__38073.cljs$core$IFn$_invoke$arity$variadic = G__38073__delegate;
return G__38073;
})()
;

return null;
});
