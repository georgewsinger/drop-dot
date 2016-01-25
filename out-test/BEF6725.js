goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22808__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22808 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22809__i = 0, G__22809__a = new Array(arguments.length -  0);
while (G__22809__i < G__22809__a.length) {G__22809__a[G__22809__i] = arguments[G__22809__i + 0]; ++G__22809__i;}
  args = new cljs.core.IndexedSeq(G__22809__a,0);
} 
return G__22808__delegate.call(this,args);};
G__22808.cljs$lang$maxFixedArity = 0;
G__22808.cljs$lang$applyTo = (function (arglist__22810){
var args = cljs.core.seq(arglist__22810);
return G__22808__delegate(args);
});
G__22808.cljs$core$IFn$_invoke$arity$variadic = G__22808__delegate;
return G__22808;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22811__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22811 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22812__i = 0, G__22812__a = new Array(arguments.length -  0);
while (G__22812__i < G__22812__a.length) {G__22812__a[G__22812__i] = arguments[G__22812__i + 0]; ++G__22812__i;}
  args = new cljs.core.IndexedSeq(G__22812__a,0);
} 
return G__22811__delegate.call(this,args);};
G__22811.cljs$lang$maxFixedArity = 0;
G__22811.cljs$lang$applyTo = (function (arglist__22813){
var args = cljs.core.seq(arglist__22813);
return G__22811__delegate(args);
});
G__22811.cljs$core$IFn$_invoke$arity$variadic = G__22811__delegate;
return G__22811;
})()
;

return null;
});
