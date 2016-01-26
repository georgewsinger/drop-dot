goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__287560__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__287560 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__287561__i = 0, G__287561__a = new Array(arguments.length -  0);
while (G__287561__i < G__287561__a.length) {G__287561__a[G__287561__i] = arguments[G__287561__i + 0]; ++G__287561__i;}
  args = new cljs.core.IndexedSeq(G__287561__a,0);
} 
return G__287560__delegate.call(this,args);};
G__287560.cljs$lang$maxFixedArity = 0;
G__287560.cljs$lang$applyTo = (function (arglist__287562){
var args = cljs.core.seq(arglist__287562);
return G__287560__delegate(args);
});
G__287560.cljs$core$IFn$_invoke$arity$variadic = G__287560__delegate;
return G__287560;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__287563__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__287563 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__287564__i = 0, G__287564__a = new Array(arguments.length -  0);
while (G__287564__i < G__287564__a.length) {G__287564__a[G__287564__i] = arguments[G__287564__i + 0]; ++G__287564__i;}
  args = new cljs.core.IndexedSeq(G__287564__a,0);
} 
return G__287563__delegate.call(this,args);};
G__287563.cljs$lang$maxFixedArity = 0;
G__287563.cljs$lang$applyTo = (function (arglist__287565){
var args = cljs.core.seq(arglist__287565);
return G__287563__delegate(args);
});
G__287563.cljs$core$IFn$_invoke$arity$variadic = G__287563__delegate;
return G__287563;
})()
;

return null;
});
