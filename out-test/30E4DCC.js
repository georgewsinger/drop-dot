goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__49968__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__49968 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49969__i = 0, G__49969__a = new Array(arguments.length -  0);
while (G__49969__i < G__49969__a.length) {G__49969__a[G__49969__i] = arguments[G__49969__i + 0]; ++G__49969__i;}
  args = new cljs.core.IndexedSeq(G__49969__a,0);
} 
return G__49968__delegate.call(this,args);};
G__49968.cljs$lang$maxFixedArity = 0;
G__49968.cljs$lang$applyTo = (function (arglist__49970){
var args = cljs.core.seq(arglist__49970);
return G__49968__delegate(args);
});
G__49968.cljs$core$IFn$_invoke$arity$variadic = G__49968__delegate;
return G__49968;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__49971__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__49971 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49972__i = 0, G__49972__a = new Array(arguments.length -  0);
while (G__49972__i < G__49972__a.length) {G__49972__a[G__49972__i] = arguments[G__49972__i + 0]; ++G__49972__i;}
  args = new cljs.core.IndexedSeq(G__49972__a,0);
} 
return G__49971__delegate.call(this,args);};
G__49971.cljs$lang$maxFixedArity = 0;
G__49971.cljs$lang$applyTo = (function (arglist__49973){
var args = cljs.core.seq(arglist__49973);
return G__49971__delegate(args);
});
G__49971.cljs$core$IFn$_invoke$arity$variadic = G__49971__delegate;
return G__49971;
})()
;

return null;
});
