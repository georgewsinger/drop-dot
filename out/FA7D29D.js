goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__307650__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__307650 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__307651__i = 0, G__307651__a = new Array(arguments.length -  0);
while (G__307651__i < G__307651__a.length) {G__307651__a[G__307651__i] = arguments[G__307651__i + 0]; ++G__307651__i;}
  args = new cljs.core.IndexedSeq(G__307651__a,0);
} 
return G__307650__delegate.call(this,args);};
G__307650.cljs$lang$maxFixedArity = 0;
G__307650.cljs$lang$applyTo = (function (arglist__307652){
var args = cljs.core.seq(arglist__307652);
return G__307650__delegate(args);
});
G__307650.cljs$core$IFn$_invoke$arity$variadic = G__307650__delegate;
return G__307650;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__307653__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__307653 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__307654__i = 0, G__307654__a = new Array(arguments.length -  0);
while (G__307654__i < G__307654__a.length) {G__307654__a[G__307654__i] = arguments[G__307654__i + 0]; ++G__307654__i;}
  args = new cljs.core.IndexedSeq(G__307654__a,0);
} 
return G__307653__delegate.call(this,args);};
G__307653.cljs$lang$maxFixedArity = 0;
G__307653.cljs$lang$applyTo = (function (arglist__307655){
var args = cljs.core.seq(arglist__307655);
return G__307653__delegate(args);
});
G__307653.cljs$core$IFn$_invoke$arity$variadic = G__307653__delegate;
return G__307653;
})()
;

return null;
});
