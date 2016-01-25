goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19861__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19861 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19862__i = 0, G__19862__a = new Array(arguments.length -  0);
while (G__19862__i < G__19862__a.length) {G__19862__a[G__19862__i] = arguments[G__19862__i + 0]; ++G__19862__i;}
  args = new cljs.core.IndexedSeq(G__19862__a,0);
} 
return G__19861__delegate.call(this,args);};
G__19861.cljs$lang$maxFixedArity = 0;
G__19861.cljs$lang$applyTo = (function (arglist__19863){
var args = cljs.core.seq(arglist__19863);
return G__19861__delegate(args);
});
G__19861.cljs$core$IFn$_invoke$arity$variadic = G__19861__delegate;
return G__19861;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19864__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19864 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19865__i = 0, G__19865__a = new Array(arguments.length -  0);
while (G__19865__i < G__19865__a.length) {G__19865__a[G__19865__i] = arguments[G__19865__i + 0]; ++G__19865__i;}
  args = new cljs.core.IndexedSeq(G__19865__a,0);
} 
return G__19864__delegate.call(this,args);};
G__19864.cljs$lang$maxFixedArity = 0;
G__19864.cljs$lang$applyTo = (function (arglist__19866){
var args = cljs.core.seq(arglist__19866);
return G__19864__delegate(args);
});
G__19864.cljs$core$IFn$_invoke$arity$variadic = G__19864__delegate;
return G__19864;
})()
;

return null;
});
