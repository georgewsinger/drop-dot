goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15732__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15732 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15733__i = 0, G__15733__a = new Array(arguments.length -  0);
while (G__15733__i < G__15733__a.length) {G__15733__a[G__15733__i] = arguments[G__15733__i + 0]; ++G__15733__i;}
  args = new cljs.core.IndexedSeq(G__15733__a,0);
} 
return G__15732__delegate.call(this,args);};
G__15732.cljs$lang$maxFixedArity = 0;
G__15732.cljs$lang$applyTo = (function (arglist__15734){
var args = cljs.core.seq(arglist__15734);
return G__15732__delegate(args);
});
G__15732.cljs$core$IFn$_invoke$arity$variadic = G__15732__delegate;
return G__15732;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15735__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15735 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15736__i = 0, G__15736__a = new Array(arguments.length -  0);
while (G__15736__i < G__15736__a.length) {G__15736__a[G__15736__i] = arguments[G__15736__i + 0]; ++G__15736__i;}
  args = new cljs.core.IndexedSeq(G__15736__a,0);
} 
return G__15735__delegate.call(this,args);};
G__15735.cljs$lang$maxFixedArity = 0;
G__15735.cljs$lang$applyTo = (function (arglist__15737){
var args = cljs.core.seq(arglist__15737);
return G__15735__delegate(args);
});
G__15735.cljs$core$IFn$_invoke$arity$variadic = G__15735__delegate;
return G__15735;
})()
;

return null;
});
