goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__393732__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__393732 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__393733__i = 0, G__393733__a = new Array(arguments.length -  0);
while (G__393733__i < G__393733__a.length) {G__393733__a[G__393733__i] = arguments[G__393733__i + 0]; ++G__393733__i;}
  args = new cljs.core.IndexedSeq(G__393733__a,0);
} 
return G__393732__delegate.call(this,args);};
G__393732.cljs$lang$maxFixedArity = 0;
G__393732.cljs$lang$applyTo = (function (arglist__393734){
var args = cljs.core.seq(arglist__393734);
return G__393732__delegate(args);
});
G__393732.cljs$core$IFn$_invoke$arity$variadic = G__393732__delegate;
return G__393732;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__393735__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__393735 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__393736__i = 0, G__393736__a = new Array(arguments.length -  0);
while (G__393736__i < G__393736__a.length) {G__393736__a[G__393736__i] = arguments[G__393736__i + 0]; ++G__393736__i;}
  args = new cljs.core.IndexedSeq(G__393736__a,0);
} 
return G__393735__delegate.call(this,args);};
G__393735.cljs$lang$maxFixedArity = 0;
G__393735.cljs$lang$applyTo = (function (arglist__393737){
var args = cljs.core.seq(arglist__393737);
return G__393735__delegate(args);
});
G__393735.cljs$core$IFn$_invoke$arity$variadic = G__393735__delegate;
return G__393735;
})()
;

return null;
});
