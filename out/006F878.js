goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17489__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17489 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17490__i = 0, G__17490__a = new Array(arguments.length -  0);
while (G__17490__i < G__17490__a.length) {G__17490__a[G__17490__i] = arguments[G__17490__i + 0]; ++G__17490__i;}
  args = new cljs.core.IndexedSeq(G__17490__a,0);
} 
return G__17489__delegate.call(this,args);};
G__17489.cljs$lang$maxFixedArity = 0;
G__17489.cljs$lang$applyTo = (function (arglist__17491){
var args = cljs.core.seq(arglist__17491);
return G__17489__delegate(args);
});
G__17489.cljs$core$IFn$_invoke$arity$variadic = G__17489__delegate;
return G__17489;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17492__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17492 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17493__i = 0, G__17493__a = new Array(arguments.length -  0);
while (G__17493__i < G__17493__a.length) {G__17493__a[G__17493__i] = arguments[G__17493__i + 0]; ++G__17493__i;}
  args = new cljs.core.IndexedSeq(G__17493__a,0);
} 
return G__17492__delegate.call(this,args);};
G__17492.cljs$lang$maxFixedArity = 0;
G__17492.cljs$lang$applyTo = (function (arglist__17494){
var args = cljs.core.seq(arglist__17494);
return G__17492__delegate(args);
});
G__17492.cljs$core$IFn$_invoke$arity$variadic = G__17492__delegate;
return G__17492;
})()
;

return null;
});
