goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__65808__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__65808 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65809__i = 0, G__65809__a = new Array(arguments.length -  0);
while (G__65809__i < G__65809__a.length) {G__65809__a[G__65809__i] = arguments[G__65809__i + 0]; ++G__65809__i;}
  args = new cljs.core.IndexedSeq(G__65809__a,0);
} 
return G__65808__delegate.call(this,args);};
G__65808.cljs$lang$maxFixedArity = 0;
G__65808.cljs$lang$applyTo = (function (arglist__65810){
var args = cljs.core.seq(arglist__65810);
return G__65808__delegate(args);
});
G__65808.cljs$core$IFn$_invoke$arity$variadic = G__65808__delegate;
return G__65808;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__65811__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__65811 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65812__i = 0, G__65812__a = new Array(arguments.length -  0);
while (G__65812__i < G__65812__a.length) {G__65812__a[G__65812__i] = arguments[G__65812__i + 0]; ++G__65812__i;}
  args = new cljs.core.IndexedSeq(G__65812__a,0);
} 
return G__65811__delegate.call(this,args);};
G__65811.cljs$lang$maxFixedArity = 0;
G__65811.cljs$lang$applyTo = (function (arglist__65813){
var args = cljs.core.seq(arglist__65813);
return G__65811__delegate(args);
});
G__65811.cljs$core$IFn$_invoke$arity$variadic = G__65811__delegate;
return G__65811;
})()
;

return null;
});
